import { useCallback, useState } from 'react';
import moment, { Moment } from 'moment';
// import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

import {
  Button,
  DatePicker,
  Input,
  TimePicker,
  Typography,
} from 'components';
// import { ArrowLink } from 'assets';
import { useWallet } from 'hooks';
import { routes } from 'appConstants';

import { proposalCreate } from 'store/proposal/actionCreators';
import { ProposalActionTypes } from 'store/proposal/actionsTypes';
import { proposalSelectors } from 'store/proposal/selectors';
import { RequestStatus } from 'types';
import { notification } from 'utils';
import { CardWrapper } from './CardWrapper';

import styles from './styles.module.scss';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ReactQuillContainer = styled.div`
  .ql-toolbar.ql-snow {
    border-color: #ffffff66;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .ql-container.ql-snow {
    border-color: #ffffff66;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: #ffffff33;
  }
`;

export const MakeAProposal: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isConnected, handleConnectWallet, isLoading } = useWallet();

  const statusCreate = useSelector(proposalSelectors.getStatus(ProposalActionTypes.Create));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Moment>(moment.utc());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Moment>(moment.utc());

  // const isAvailableAddChoice = !!choice1 && !!choice2;

  // const onAddChoiceClick = useCallback(() => {}, []);

  const handleSubmitProposal = useCallback(() => {
    const currentDateTime = moment.utc();
    const startDateTime = moment.utc(startDate).set({
      hour: startTime.hours(),
      minute: startTime.minutes(),
      second: startTime.seconds(),
    });

    const endDateTime = moment.utc(endDate).set({
      hour: endTime.hours(),
      minute: endTime.minutes(),
      second: endTime.seconds(),
    });

    if (startDateTime < currentDateTime || endDateTime < currentDateTime) {
      notification.info({
        message: 'You cannot select a time in the past.',
      });
      return;
    }

    dispatch(proposalCreate({
      title,
      content,
      startDate: startDate?.toISOString() ?? '',
      startTime: startTime?.format('HH:mm') ?? '',
      endDate: endDate?.toISOString() ?? '',
      endTime: endTime?.format('HH:mm') ?? '',
      forTitle: choice1,
      againstTitle: choice2,
      callback: (id: string) => {
        router.push(`${routes.votingDetails.root}/${id}`);
      },
    }));
  }, [choice1, choice2, content, dispatch, endDate, endTime, router, startDate, startTime, title]);

  const isDisabledCreate = title === '' || content === '' || choice1 === '' || choice2 === '';

  return (
    <div className={styles.proposal__container}>
      <div className={styles.form_container}>
        <Input
          onChangeValue={setTitle}
          value={title}
          placeholder="Enter your title"
          label="Title"
          classNameLabel={styles.label}
          classNameContainer={styles.input__container}
        />
        <Typography type="p" className={styles.label}>
          Content
          <p>Tip: write in Markdown!</p>
        </Typography>
        <ReactQuillContainer>
          <ReactQuill theme="snow" className="h-[400px] text-[#ffffff66] mb-20" value={content} onChange={(ct) => setContent(ct)} />
        </ReactQuillContainer>
        <CardWrapper title="Choices" classNameContent={styles.choices__content}>
          <Input
            onChangeValue={setChoice1}
            value={choice1}
            placeholder="Input choice text"
          />
          <Input
            onChangeValue={setChoice2}
            value={choice2}
            placeholder="Input choice text"
          />
          {/* <Button
            onClick={onAddChoiceClick}
            isDisabled={!isAvailableAddChoice}
            className={styles.add_choice__button}
          >
            Add Choice
          </Button> */}
        </CardWrapper>
      </div>
      <CardWrapper title="Actions" className={styles.action__container} classNameContent={styles.action__content}>
        <DatePicker
          onChangeValue={setStartDate}
          value={startDate}
          label="START DATE (UTC)"
          minDate={new Date()}
        />

        <div>
          <span className={styles.timepicker_label}>START TIME (UTC)</span>
          <TimePicker
            onChangeValue={(e) => {
              setStartTime(e);
              if (e > endTime) setEndTime(e);
            }}
            value={startTime}
          />
        </div>

        <DatePicker
          onChangeValue={setEndDate}
          value={endDate}
          label="END DATE (UTC)"
          minDate={startDate}
        />
        <div>
          <span className={styles.timepicker_label}>END TIME (UTC)</span>
          <TimePicker
            onChangeValue={(e) => {
              if (e < startTime) setStartTime(e);
              setEndTime(e);
            }}
            value={endTime}
          />
        </div>
        {/* <div className={styles.snapshot__container}>
          Snapshot
          <a href="/" target="_blank" rel="noreferrer">
            <Image src={ArrowLink} alt="arrow icon" />
            25576718
          </a>
        </div> */}
        <Button
          onClick={isConnected ? handleSubmitProposal : handleConnectWallet}
          className={styles.button_connect}
          isLoading={isLoading || statusCreate === RequestStatus.REQUEST}
          isDisabled={isDisabledCreate}
        >
          {isConnected ? 'Create Proposal' : 'Connect Wallet'}
        </Button>
      </CardWrapper>
    </div>
  );
};
