import { Fragment } from "react";
import Image from "next/image";
import {
  FaWordpress,
  FaGoogleDrive,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaReact,
} from "react-icons/fa";
import {
  SiAsana,
  SiZapier,
  SiQuickbooks,
  SiTableau,
  SiEventbrite,
  SiCanva,
  SiGmail,
  SiHubspot,
  SiNotion,
  SiClickup,
  SiZoom,
  SiMailchimp,
  SiVercel,
  SiFigma,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

interface StackProps {
  name: string;
  className?: string;
}

const imageIcons: Record<string, { src: string; alt: string }> = {
  gohighlevel: {
    src: "/images/gohighlevel.png",
    alt: "GoHighLevel",
  },
  keap: {
    src: "/images/keap.png",
    alt: "Keap",
  },
  capcut: {
    src: "/images/capcut.png",
    alt: "CapCut",
  },
  alchemer: {
    src: "/images/alchemer.png",
    alt: "Alchemer",
  },
  bni: {
    src: "/images/bni.png",
    alt: "BNI Connect",
  },
};

const Stack = ({ name, className }: StackProps) => {
  const key = name.toLowerCase().replace(/\s+/g, "");

  if (imageIcons[key]) {
    return (
      <Image
        src={imageIcons[key].src}
        alt={imageIcons[key].alt}
        width={22}
        height={22}
        className={className}
      />
    );
  }

  switch (key) {
    case "asana":
      return <SiAsana className={className} />;

    case "zapier":
      return <SiZapier className={className} />;

    case "quickbooks":
      return <SiQuickbooks className={className} />;

    case "tableau":
      return <SiTableau className={className} />;

    case "wordpress":
      return <FaWordpress className={className} />;

    case "eventbrite":
      return <SiEventbrite className={className} />;

    case "canva":
      return <SiCanva className={className} />;

    case "gmail":
      return <SiGmail className={className} />;

    case "googledrive":
      return <FaGoogleDrive className={className} />;

    case "hubspot":
      return <SiHubspot className={className} />;

    case "notion":
      return <SiNotion className={className} />;

    case "clickup":
      return <SiClickup className={className} />;

    case "zoom":
      return <SiZoom className={className} />;

    case "mailchimp":
      return <SiMailchimp className={className} />;

    case "sql":
      return <TbFileTypeSql className={className} />;

    case "vercel":
      return <SiVercel className={className} />;

    case "figma":
      return <SiFigma className={className} />;

    case "javascript":
      return <SiJavascript className={className} />;

    case "nodejs":
    case "node.js":
      return <SiNodedotjs className={className} />;

    case "react":
      return <FaReact className={className} />;

    case "linkedin":
      return <FaLinkedin className={className} />;

    case "facebook":
      return <FaFacebook className={className} />;

    case "instagram":
      return <FaInstagram className={className} />;

    default:
      return <Fragment />;
  }
};

export default Stack;