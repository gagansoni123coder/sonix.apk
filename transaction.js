async function addTransaction({

uid,
type,
title,
amount,
status = "success",
rejection_reason = ""

}){

const { error } = await client
.from("transactions")
.insert([
{
uid,
type,
title,
amount,
status,
rejection_reason
}
]);

if(error){

console.log(
"Transaction Error:",
error
);

}

}
