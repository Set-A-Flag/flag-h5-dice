export default function(axios, base) {
    return {
        hello() {
            return axios.get('./hello', {
                params: {

                }
            })
        }
    }
}