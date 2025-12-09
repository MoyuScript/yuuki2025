import got from "got";
import fs from "fs";
import path from "path";

const workdir = "bless";
const outputJsonPath = path.join(workdir, "output.json");
const outputImageDir = path.join(workdir, "avatars");

if (!fs.existsSync(outputImageDir)) {
  fs.mkdirSync(outputImageDir);
}

const input = JSON.parse(
  fs.readFileSync(path.join(workdir, "input.json"), "utf-8")
);

let output;

if (fs.existsSync(outputJsonPath)) {
  output = JSON.parse(
    fs.readFileSync(path.join(workdir, "output.json"), "utf-8")
  );
} else {
  output = [];
}

for (const reply of input.data.replies) {
  const filteredMessage = reply.content.message.replace(/\[.+?\]/g, "");
  console.log(`${reply.member.uname}: ${filteredMessage}`);
  if (!reply.up_action.like) {
    console.log("------ 未赞跳过");
    continue;
  }
  const avatarBuffer = await got(
    `${reply.member.avatar}@256w_256h.png`
  ).buffer();
  output.push({
    uid: reply.member.mid,
    name: reply.member.uname,
    content: filteredMessage,
    avatar: `data:image/png;base64,${avatarBuffer.toString("base64")}`,
  });
  fs.writeFileSync(
    path.join(outputImageDir, `${reply.member.mid}_${reply.member.uname}.png`),
    avatarBuffer
  );
}

fs.writeFileSync(outputJsonPath, JSON.stringify(output, null, 2));
