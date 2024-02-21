import {
  Card,
  Link,
  Table,
} from 'components';
import { Column } from 'react-table';
import { stringLongShortcut } from 'utils';
import { useColumns as useDetailsColumns } from './columns';
import styles from './styles.module.scss';

export const DetailsTable = ({
  id, creator,
}: {
  id: string,
  creator: string,
}) => {
  const columnsDetails = useDetailsColumns();

  return (
    <Card 
      title="Details" 
      classNameContent={styles.details__content}
    >
      <Table 
        showHeaders={false} 
        data={[
          {
            1: (<div className={styles.name_detail}> Identifier </div>), 
            2: (<Link href="./">{id}</Link>),
          },
          {
            1: (<div className={styles.name_detail}> Creator </div>), 
            2: (<Link href="./">{stringLongShortcut(creator)}</Link>),
          },
          // {
          //   1: (<div className={styles.name_detail}> Snapshot </div>), 
          //   2: (<Link href="./"> 25576718 </Link>),
          // },
        ]}
        className={styles.details_table_container} 
        columns={columnsDetails as unknown as Column<object>[]} 
      />
    </Card>
  );
};
