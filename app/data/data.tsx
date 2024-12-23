import BraveIcon from "../assets/brave.png";
import CircleIcon from "../assets/circle.png";
import DiscordIcon from "../assets/discord.png";
import JumpIcon from "../assets/jump.png";
import LollapaoozIcon from "../assets/lollapaooz.png";
import GoogleIcon from "../assets/google.png";
import MagicIcon from "../assets/magic.png";

export const data: any = {
  brandes: [
    { id: 1, image: BraveIcon, alt: "logos" },
    { id: 2, image: CircleIcon, alt: "logos" },
    { id: 3, image: DiscordIcon, alt: "logos" },
    { id: 4, image: GoogleIcon, alt: "logos" },
    { id: 5, image: JumpIcon, alt: "logos" },
    { id: 6, image: LollapaoozIcon, alt: "logos" },
    { id: 7, image: MagicIcon, alt: "logos" },
  ],

  cardData: [
    {
      title: "Fast",
      desc: "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
      price: "3,969",
      content: "Transactions per second",
    },
    {
      title: "Decentralized",
      desc: "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
      price: "1,675",
      content: "Validator nodes",
    },
    {
      title: "Scalable",
      desc: "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
      price: "163,077,581,394",
      content: "Total transactions",
    },
    {
      title: "Energy Efficient",
      desc: "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
      price: "0%",
      content: "Net carbon impact",
    },
  ],
};
