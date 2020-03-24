import * as LaunchDarkly from "launchdarkly-node-client-sdk";
import { Example } from "./interfaces/example";
import { UsersProvider } from "./interfaces/users-provider";

export class ABTestExample implements Example {

    constructor(private usersProvider: UsersProvider) { }

    execute(clientSideId: string): void {

        this.usersProvider.getUsers().forEach(user => {
            let client = LaunchDarkly.initialize(clientSideId, user);

            client.on('ready', () => {

                let variation = client.variation("landing-pages");

                if (variation === 'landing-page-default') {
                    document.body.innerText += `Showing landing-default-1 for user ${user.key}` + '\n';
                } else if (variation === 'landing-page-2') {
                    document.body.innerText += `Showing landing-page-2 for user ${user.key}` + '\n';
                } else if (variation === 'landing-page-3') {
                    document.body.innerText += `Showing landing-page-3 for user ${user.key}` + '\n';
                } else {
                    document.body.innerText += `Experiment disabled for user ${user.key}` + '\n';
                }
                let converted = !(+new Date()%2);
                if(converted){
                    document.body.innerText += `user ${user.key} is a lead!` + '\n';
                    client.track('new_lead', { revenue: 1 });
                }
            });
        });
    }
}