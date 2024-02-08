import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams {
  firstName: string;
  lastName: string;
}

// insert user 
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      email: true,
      password: true,
      firstName: true,
      lastName: true,
    },
  });
  console.log(res);
}

// insertUser("admin4@gmail.com", "123456", "raja", "kumar")

// update user
async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: {
      email: username,
    },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// updateUser("admin2@gmail.com", {
//   firstName: "raja111",
//   lastName: "kumar111",
// });

// find user
async function getUser(username: string) {
    const res = await prisma.user.findFirst({
      where: {
          email: username
      }
    })
    console.log(res);
  }
  
  // getUser("admin2@gmail.com");

// delete user
async function getdelete (username : string ) {
  const user  = await prisma.user.delete({
    where  : {
      email : username
    }
  })
  console.log(user)
}

getdelete("admin4@gmail.com")