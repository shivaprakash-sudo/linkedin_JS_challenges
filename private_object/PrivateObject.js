import { log, table } from "console";

const username = Symbol("username");
const password = Symbol("password");

// use predefined variables as object keys to
// make the private
const User = {
    [username]: "Shiva",
    [password]: "1234klns",
    age: 25
}

table(User);
