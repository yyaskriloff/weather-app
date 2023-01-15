import { Dimmer, Loader } from 'semantic-ui-react';

function LoadScreen() {
    return (<div>
        <Dimmer active>
            <Loader>Loading..</Loader>
        </Dimmer>
    </div>)
}
export default LoadScreen;