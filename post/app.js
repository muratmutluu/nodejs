let posts = [
  {
    id: 1,
    title: "Lorem",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Ipsum",
    description: "Consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Dolor",
    description: "Rerum officia magnam animi harum.",
  },
];

let newPost = {
  id: 4,
  title: "Nostrum",
  description: "Natus ut quam, quidem est.",
};

const listPosts = (data) => {
  return new Promise((resolve, reject) => {
    console.log("Posts are sorting...");
    if (data) {
      posts.map((post) => {
        console.log(
          `Title : ${post.title} \nDescription: ${post.description} \n---------------- `
        );
      });
      resolve("Post are sorted.");
    } else {
      reject("Posts are not sorted.");
    }
  });
};

const addPosts = (newPost) => {
  return new Promise((resolve, reject) => {
    console.log("Post are adding...");
    if (newPost) {
      posts.push(newPost);
      resolve("Post are added.");
    } else {
      reject("Post are not added.");
    }
  });
};

async function showPosts() {
  try {
    let listedPosts = await listPosts(true);
    console.log(listedPosts);
    console.log("----------------------------------------");
    const isAdded = await addPosts(newPost);
    console.log(isAdded);

    listedPosts = await listPosts(true);
    console.log(listedPosts);
  } catch (error) {
    console.log(error);
  }
}

showPosts();
