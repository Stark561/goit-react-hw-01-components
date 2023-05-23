import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { TransactionHistory } from './Transactions/TransactionHistory.jsx';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList list={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
