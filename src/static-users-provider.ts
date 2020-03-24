import { UsersProvider } from "./interfaces/users-provider";
import { LDUser } from "launchdarkly-node-client-sdk";

export class StaticUsersProvider implements UsersProvider {
    getUsers(): LDUser[] {
        return [
            { key: 'alice', },
            { key: 'bob', },
            { key: 'charlie', },
            { key: 'don', },
            { key: 'eli', },
            { key: 'fabio', },
            { key: 'gary', },
            { key: 'helen', },
            { key: 'ian', },
            { key: 'jill', },
        ];
    }
}