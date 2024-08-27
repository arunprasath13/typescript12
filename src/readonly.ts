interface Config {
    readonly endpoint:string
    readonly apiKey:string
}

const config:Readonly<Config> = {
    endpoint:"https://api.example.com",
    apiKey:"1234abcd"
}

