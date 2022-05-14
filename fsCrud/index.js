import * as fs from "fs";

const fileWrite = (name, salary) => {
  fs.writeFile(
    "employees.json",
    `{"name": "${name}", "salary": ${salary}}`,
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Dosya başarılı bir şekilde oluşturuldu.");
    }
  );
};

const fileRead = () => {
  fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log("Dosya başarılı bir şekilde okundu.");
    console.log(data);
  });
};

const fileAppend = (name, salary) => {
  fs.appendFile(
    "employees.json",
    `\n{"name": "${name}", "salary": ${salary}}`,
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Dosya başarılı bir şekilde güncellendi.");
      fileRead();
    }
  );
};

const fileUnlink = (fileName) => {
  fs.unlink(`${fileName}`, (err) => {
    if (err) console.log(err);
    console.log("Dosya başarılı bir şekilde silindi.");
  });
};


fileWrite("Employee 1 Name", 2000)
fileRead()
//fileAppend("Employee 2 Name", 3000)
//fileUnlink("employees.json")
