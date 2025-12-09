import {
  CalendarFilled,
  CaretDownOutlined,
  GithubFilled,
  PlayCircleFilled,
} from "@ant-design/icons";
import type React from "react";
import {
  LINK_BILIBILI_ACCOUNT,
  LINK_BLESS,
  LINK_GIFT_LINK,
  LINK_SUBSCRIBE_LIVE,
  LINK_VIDEO_PV0,
  LINK_VIDEO_PV1,
  LINK_VIDEO_PV2,
} from "./links";

function NewsEvent({
  title,
  description,
  video,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  video?: {
    src: string;
    alt: string;
    url: string;
  };
}) {
  return (
    <div>
      <h2 className="font-bold lg:text-lg">
        <CalendarFilled /> {title}
      </h2>
      <div className="px-5 mt-1">
        <div className="mb-4">{description}</div>
        {video && (
          <a
            href={video.url}
            target="_blank"
            className="relative block mt-2 rounded-xl overflow-hidden"
          >
            <img
              src={video.src}
              alt={video.alt}
              width={1280}
              height={720}
              className="w-full"
            />
            <span className="absolute left-0 top-0 h-full w-full bg-black/50 flex items-center justify-center text-4xl">
              <PlayCircleFilled />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <main>
        <section
          id="homepage"
          className="h-screen flex flex-col justify-center text-center [background:linear-gradient(to_top,--alpha(var(--color-yuki-dark-pink)/80%)_0,--alpha(var(--color-yuki-dark-pink)/80%)_40%,transparent_100%)]"
        >
          <div className="-mt-32 mx-auto">
            <img
              src="/logo-glow.png"
              alt="LOGO"
              width={1024}
              height={1024}
              className="w-72 lg:w-96"
            />
          </div>
          <div className="text-white -mt-6 lg:text-xl lg:leading-relaxed">
            <p>长达半个小时的精心改编的游戏音乐</p>
            <p>再现雪之小镇下的故事</p>
          </div>
          <div className="text-white mt-4 text-2xl lg:text-4xl lg:mt-8">
            <p className="font-bold">2025 年 12 月 24 日 19:00</p>
          </div>
          <div className="mt-6 lg:mt-14">
            <a
              href={LINK_SUBSCRIBE_LIVE}
              target="_blank"
              className="inline-block text-white font-bold bg-yuki-pink text-xl px-8 py-2 rounded-full lg:text-2xl lg:px-16 lg:py-3"
            >
              预约直播
            </a>
          </div>
          <a
            href="#links"
            className="text-white absolute bottom-0 left-1/2 transform -translate-1/2 animate-bounce lg:text-2xl"
          >
            <CaretDownOutlined />
          </a>
        </section>
        <section id="links" className="min-h-[50vh] bg-white/90 py-4 px-2">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center text-yuki-pink text-lg lg:text-2xl">
              内容导航
            </h1>
            <div className="flex flex-col text-center mt-4 gap-2">
              <a
                className="border-2 rounded-md border-yuki-pink text-yuki-pink py-2"
                href="#news"
              >
                重要事件
              </a>
              <a
                className="border-2 rounded-md border-yuki-pink text-yuki-pink py-2"
                href="#gift"
              >
                纪念礼盒
              </a>
              <a
                className="border-2 rounded-md border-yuki-pink text-yuki-pink py-2"
                href="#bless"
              >
                送祝福语
              </a>
              <a
                className="border-2 rounded-md border-yuki-cyan text-yuki-cyan py-2"
                href="https://qm.qq.com/q/VqxzROdYOs"
                target="_blank"
              >
                加入交流群：1015252118
              </a>
            </div>
          </div>
        </section>
        <section
          id="news"
          className="min-h-[50vh] bg-yuki-dark-pink/80 pt-4 pb-16 px-2 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center text-lg lg:text-2xl">
              重要事件
            </h1>
            <div className="mt-4 flex flex-col gap-8">
              <NewsEvent
                title="2025-12-06"
                description={<p>八音盒温柔演奏《ゆきよりも優しく》曲目预览。</p>}
                video={{
                  url: LINK_VIDEO_PV2,
                  src: "/预告视频2封面.png",
                  alt: "预告视频2封面",
                }}
              />
              <NewsEvent
                title="2025-11-22"
                description={
                  <p>
                    预告视频 1
                    发布：直播预约开启、纪念礼盒预售开启、祝福语征集开启。
                  </p>
                }
                video={{
                  url: LINK_VIDEO_PV1,
                  src: "/预告视频1封面.png",
                  alt: "预告视频1封面",
                }}
              />
              <NewsEvent
                title="2025-10-22"
                description={<p>制作预告发布。</p>}
                video={{
                  url: LINK_VIDEO_PV0,
                  src: "/制作预告封面.png",
                  alt: "制作预告封面",
                }}
              />
            </div>
          </div>
        </section>
        <section id="gift" className="min-h-[50vh] bg-white/90 py-4 px-2">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center text-yuki-pink text-lg lg:text-2xl">
              纪念礼盒
            </h1>
            <p className="mt-4 text-center">
              我们为本次生日音乐会设计了一份精美的纪念礼盒套装，内容如下：
            </p>
            <div className="flex justify-center">
              <img
                src="/纪念礼盒产品图.png"
                className="mt-4"
                width={738}
                height={1080}
                alt="纪念礼盒产品图"
              />
            </div>
            <div className="mt-4 bg-[#eba8b544] p-4 rounded-xl">
              <p>
                <strong className="text-yuki-pink">预售时间：</strong>2025 年 11
                月 22 日 ~ 2025 年 12 月 31 日
              </p>
              <p>
                <strong className="text-yuki-pink">发货时间（预计）：</strong>
                2026 年 2 月
              </p>
              <div className="text-yuki-cyan font-bold text-center py-4 lg:text-xl">
                <p>祝福语收集截止前购买纪念礼盒</p>
                <p>
                  <strong className="text-yuki-pink">祝福语必定被选中</strong>
                  ，并优先醒目展示
                </p>
              </div>
              <details className="py-2">
                <summary>购买须知</summary>
                <div className="[&>p]:mb-4 mt-2">
                  <p>
                    <strong className="text-yuki-pink">关于视觉设计：</strong>
                    为将全部心血倾注于核心的
                    <strong className="text-yuki-cyan font-normal">
                      音乐改编与编曲
                    </strong>
                    ，礼盒的视觉部分我们采用了
                    <strong className="text-yuki-cyan font-normal">
                      AIGC辅助生成 + 人工精修
                    </strong>
                    的方式完成。我们承诺会以高标准进行品控，确保其作为收藏品的独特美感。
                  </p>
                  <p>
                    <strong className="text-yuki-pink">关于产品实物：</strong>
                    本页面图片为
                    <strong className="text-yuki-cyan font-normal">
                      预览图
                    </strong>
                    。礼盒将根据最终预售量进行定制生产，实物可能与预览图存在细微差异，我们将尽力还原设计效果。
                  </p>
                  <p>
                    <strong className="text-yuki-pink">关于预售期限：</strong>
                    此为
                    <strong className="text-yuki-cyan font-normal">
                      限量预售
                    </strong>
                    ，结束后即下架。仅可能因极少量售后备品而有最终现货，但无法保证。请务必于预售期内下单，锁定这份独家纪念。
                  </p>
                  <p>
                    <strong className="text-yuki-pink">关于售后：</strong>
                    下单后（包括预售期间、发货后）不支持退款。虽然我们在发货前会仔细检查产品，但收货时请务必录制完整开箱视频，若发现存在损坏之处，请在订单签收之日起的
                    3 天内联系我们处理。
                  </p>
                  <p>
                    同人项目制作不易，感谢大家的理解与支持。如有任何疑问，欢迎通过各渠道（评论区、交流群、站内信等）与我们联系。
                  </p>
                </div>
              </details>
            </div>
            <div className="flex justify-center my-8 lg:my-12">
              <a
                href={LINK_GIFT_LINK}
                target="_blank"
                className="inline-block text-white font-bold bg-yuki-pink text-xl px-8 py-2 rounded-full lg:text-2xl lg:px-10 lg:py-3"
              >
                前往购买
              </a>
            </div>
          </div>
        </section>
        <section
          id="bless"
          className="min-h-[50vh] bg-yuki-dark-pink/80 pt-4 pb-16 px-2 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-center text-lg lg:text-2xl">
              来给雪雪送上祝福语吧
            </h1>
            <div className="text-center mt-4 leading-loose lg:mt-8 lg:text-xl">
              <p>
                是否有想对可爱的<strong className="text-yuki-cyan">雪雪</strong>
                说的话？
              </p>
              <p>
                来<strong className="text-yuki-cyan">送上你的祝福语</strong>吧！
              </p>
              <p>
                被选中的祝福语
                <strong className="text-yuki-cyan">
                  将会在直播间、纪念乐谱
                </strong>
                中展示
              </p>
              <p>
                参加活动有机会
                <strong className="text-yuki-cyan">免费获得一份纪念礼盒</strong>
              </p>
              <p className="my-8 lg:my-12">
                <a
                  href={LINK_BLESS}
                  target="_blank"
                  className="inline-block text-white font-bold bg-yuki-pink text-xl px-8 py-2 rounded-full lg:text-2xl lg:px-10 lg:py-3"
                >
                  前往参与
                </a>
              </p>
            </div>
            <div className="bg-white/80 text-black p-4 rounded-xl">
              <h2 className="font-bold text-center mb-4 lg:text-lg">
                参与步骤
              </h2>
              <p>
                <strong>祝福语收集时间：</strong>
                2025 年 11 月 22 日 ~ 2025 年 12 月 21 日
              </p>
              <ol className="list-decimal pl-4 mt-2">
                <li>
                  <p>
                    关注 B 站账号：
                    <a
                      href={LINK_BILIBILI_ACCOUNT}
                      target="_blank"
                      className="text-yuki-cyan underline font-bold"
                    >
                      @MoyuScript
                    </a>
                    ；
                  </p>
                </li>
                <li>
                  <p>
                    在
                    <a
                      href={LINK_BLESS}
                      target="_blank"
                      className="text-yuki-cyan underline font-bold"
                    >
                      指定动态
                    </a>
                    下
                    <strong className="text-yuki-pink">
                      评论你想对雪雪说的祝福语
                    </strong>
                    （务必勾选
                    <strong className="text-yuki-pink">
                      同时转发到我的动态
                    </strong>
                    ，请直接评论，回复他人的不算）;
                  </p>
                </li>
                <li>
                  <p>
                    参与完成，如果你
                    <strong className="text-yuki-pink">已购买纪念礼盒</strong>
                    ，请务必通过闲鱼告知你的 B 站
                    UID，我们将进行登记，必定选中你的祝福语并优先醒目展示。已购买纪念礼盒的小伙伴对转发和评论不作要求，如果不想评论，请务必通过闲鱼告知你想说的祝福语，否则视为放弃参与。
                  </p>
                </li>
              </ol>
              <details className="mt-2">
                <summary>详情规则</summary>
                <div>
                  <h3 className="mt-2 mb-1 font-bold">内容要求</h3>
                  <div>
                    <p>
                      1. <strong className="text-yuki-pink">必须</strong>
                      与作品《星辰恋曲的白色永恒》有关，推荐给
                      <strong className="text-yuki-cyan">雪雪</strong>
                      送祝福。
                    </p>
                    <p>
                      2. 内容<strong className="text-yuki-pink">必须</strong>
                      有意义、健康向上、遵守法律法规。
                      <strong className="text-yuki-pink">反例：</strong>
                      求中、好好好、我要草xxx。
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mt-2 mb-1 font-bold">抽选流程</h3>
                  <div>
                    <p>
                      1.
                      内容初审（标准为有意义、健康向上、遵守法律法规等合适内容）。
                    </p>
                    <p>
                      2.
                      如果已购买礼盒，直接入选。如果未购买礼盒，进行随机抽取入选（数量根据最终收集总数而定，有可能全部入选）。
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mt-2 mb-1 font-bold">礼盒抽奖流程</h3>
                  <div>
                    <p>1. 进行上一部分的流程 1（即内容初审）后，形成抽选池。</p>
                    <p>
                      2. 在直播中进行公开开奖（抽奖程序源代码公开，绝无黑幕）。
                    </p>

                    <p>
                      3.
                      中奖用户若未购买礼盒，则赠送礼盒。若已购买礼盒，则办理退款处理后再赠送，也可转赠他人。
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mt-2 mb-1 font-bold">个人信息使用说明</h3>
                  <div>
                    参与该活动，视为您同意我们使用您的以下的公开信息：B
                    站名字、UID、头像、在指定动态下的评论内容。这些信息仅用于直播中的祝福语展示环节和印刷成纪念礼盒中的祝福页。
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-4 bg-yuki-pink/95 text-white text-center space-y-2">
        <p>版权所有：2025 年雪雪生日音乐会</p>
        <p>未经许可请勿使用本网站的任何内容，用了就把你叭咕叭咕吃掉</p>
        <p>
          免责声明：本次活动为纯个人发起的粉丝同人活动，与官方无任何联系。若有任何侵犯到权益的地方，请联系
          E-mail：moyuscript@gmail.com
        </p>
        <p>
          <a href="https://github.com/MoyuScript/yuuki2025" target="_blank">
            <GithubFilled /> 源代码
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
