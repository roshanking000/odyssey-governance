import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card, CheckBox, Modal,
} from 'components';
import { RequestStatus } from 'types';
import { useWallet } from 'hooks';

import { proposalGetItem, proposalVote } from 'store/proposal/actionCreators';
import { ProposalActionTypes } from 'store/proposal/actionsTypes';
import { proposalSelectors } from 'store/proposal/selectors';
import { metamaskSelectors } from 'store/metamask/selectors';

import styles from './styles.module.scss';

export const CastVote = () => {
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  
  const [isVoteYes, setIsVoteYes] = useState(false);
  const statusVote = useSelector(
    proposalSelectors.getStatus(ProposalActionTypes.Vote),
  );
  const proposal = useSelector(proposalSelectors.getProp('proposal'), shallowEqual);
  const resultVote = useSelector(proposalSelectors.getProp('resultVote'));
  const address = useSelector(metamaskSelectors.getProp('address'));

  const isVoted = address !== '' && proposal && proposal.votes.some(
    (item: { 
      proposalId: string; 
      voter: string; 
      support: boolean; 
      votingPower: string; 
      txHash: string; 
    }) => item.voter.toLocaleLowerCase() === address.toLocaleLowerCase(),
  );
  const isCreator = proposal?.creator.toLocaleLowerCase() === address.toLocaleLowerCase();

  const { isConnected, handleConnectWallet, isLoading } = useWallet(() => {
    if (proposal) {
      dispatch(proposalGetItem({
        idProposal: proposal?.id,
      }));
    }
  });

  const onChangeVote = useCallback(() => {
    setIsVoteYes(!isVoteYes);
  }, [isVoteYes]);

  const handleSubmitVote = useCallback(() => {
    if (proposal) {
      dispatch(proposalVote({
        idProposal: proposal?.id, 
        result: isVoteYes, 
        callback: () => {
          setIsShowModal(false);
          dispatch(proposalGetItem({
            idProposal: proposal?.id,
          }));
        },
      }));
    }
  }, [dispatch, isVoteYes, proposal]);

  useEffect(() => {
    if (resultVote !== null) {
      setIsVoteYes(resultVote); 
    }
  }, [resultVote]);

  const handleCloseModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  return (
    <Card 
      title="Cast your vote" 
      theme="imperceptible" 
      className={styles.cast_vote__container}
      classNameContent={styles.cast_vote__content}
    >
      <CheckBox 
        checked={isVoteYes} 
        onChange={onChangeVote} 
        classNameContainer={styles.cast_vote_checkbox__container}
        description={`${proposal?.forTitle}`}
        isDisabled={isVoted || !isConnected}
      />
      <CheckBox 
        checked={!isVoteYes} 
        onChange={onChangeVote}
        classNameContainer={styles.cast_vote_checkbox__container}
        description={`${proposal?.againstTitle}`}
        isDisabled={isVoted || !isConnected}
      />
      <div className={styles.cast_vote_button__container}>
        {!isVoted && (
          <Button 
            theme="primary" 
            onClick={isConnected ? () => setIsShowModal(true) : handleConnectWallet} 
            isLoading={isLoading}
            isDisabled={isCreator}
          >
            {isConnected ? 'Cast Vote' : 'Connect wallet'}
          </Button>
        )}
      </div>
      <Modal
        isOpen={isShowModal}
        title="Confirm Vote"
        onClose={handleCloseModal}
      >
        <div className={styles.answer}>
          <div className={styles.label}>
            Voting for
          </div>
          <div className={styles.value}>
            {isVoteYes ? proposal?.forTitle : proposal?.againstTitle}
          </div>
        </div>
        <div className={styles.groupButtons}>
          <Button 
            theme="primary_long" 
            onClick={handleSubmitVote} 
            isLoading={statusVote === RequestStatus.REQUEST}
          >
            Confirm Vote
          </Button>
          <Button 
            theme="gray_long" 
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </Card>
  );
};
