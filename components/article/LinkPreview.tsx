import Image from "next/image";
import Link from "next/link";
import { styled } from "../../stitches.config";
import { Headings, StyledFigure, StyledFigcaption, Paragraph } from "./styled";

interface LinkPreviewProps {
  url: string;
  coverUrl: string;
  title: string;
  description: string;
  alt?: string;
}

const StyledLink = styled("a", {
  overflow: "hidden",
  marginBlockEnd: "$16",
  textDecoration: "none",
  border: "1px solid hsl($shade1200)",
  borderRadius: "8px",

  variants: {
    responsive: {
      mobile: {
        display: "block",
      },
      tablet: {
        display: "grid",
        grid: "auto / 180px 1fr",
        columnGap: "$16",
      },
    },
  },
});

const PreviewText = styled("div", {
  variants: {
    responsive: {
      mobile: {
        paddingInlineStart: "$12",
      },
      tablet: {
        paddingInlineStart: 0,
        paddingBlockStart: "$12",
      },
    },
  },
});

export default function LinkPreview({
  url,
  coverUrl,
  title,
  description,
  alt,
}: LinkPreviewProps) {
  return (
    <Link href={url} passHref>
      <StyledLink
        responsive={{ "@initial": "mobile", "@m992": "tablet" }}
        target="_blank"
        rel="noopener"
      >
        <StyledFigure linkPreview={{ "@initial": "mobile", "@m992": "tablet" }}>
          <Image
            src={coverUrl}
            fill={true}
            style={{ objectFit: "cover" }}
            alt={alt ? alt : ""}
          />
        </StyledFigure>
        <PreviewText responsive={{ "@initial": "mobile", "@m992": "tablet" }}>
          <Headings as="strong" article="linkPreview">
            {title}
          </Headings>
          <Paragraph position="linkPreview">{description}</Paragraph>
        </PreviewText>
      </StyledLink>
    </Link>
  );
}
