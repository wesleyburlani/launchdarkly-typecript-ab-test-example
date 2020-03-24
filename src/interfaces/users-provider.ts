import { LDUser } from "launchdarkly-node-client-sdk";

export interface UsersProvider {
    getUsers(): LDUser[];
}