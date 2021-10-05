import { User, UserStatus } from '../proto/users_pb';
import allUsers from './all-users';
import createNewUsers from './create-users';
import getUsers from './get-user';

async function run() {
  const user = await getUsers(1);
  console.log(user.toString());

  const jim = new User();
  jim.setId(20);
  jim.setName('Jim');
  jim.setAge(30);
  jim.setStatus(UserStatus.OFFLINE);

  createNewUsers([jim]);

  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();

  console.log(`\nListing all ${users.length} users`);

  for (const user of users) {
    console.log(user.toString());
  }
}

run();
