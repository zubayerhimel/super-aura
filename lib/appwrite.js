import { Account, Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.himel.aora",
  projectId: "661e3ab89894f154c88f",
  databaseId: "661e3c4a313c0c9d0b14",
  userCollectionId: "661e3c644c9487c33af4",
  videoCollectionId: "661e3c932e08a4631c16",
  storageId: "661e3e60a62dc9fd3546",
};

// Init your react-native SDK
const client = new Client();

client.setEndpoint(config.endpoint).setProject(config.projectId).setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
