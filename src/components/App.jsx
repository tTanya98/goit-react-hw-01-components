import { Profile } from './user-profile/profile';
import user from './user-profile/user.json';
import { Statistics } from './statistics/statistics';
import data from './statistics/data.json';
import { FriendList } from './friends-list/friendList';
import friends from './friends-list/friends.json';
import { TransactionHistory } from './transactions/transactionHistory';
import transactions from './transactions/transactions';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
