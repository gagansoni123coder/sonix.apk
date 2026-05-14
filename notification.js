async function addNotification(data){

const { uid, title, message, type } = data;

const { error } = await client
.from("notifications")
.insert([{
  uid,
  title,
  message,
  type,
  is_read: false
}]);

if(error){
console.log("Notification Error:", error);
}

}
