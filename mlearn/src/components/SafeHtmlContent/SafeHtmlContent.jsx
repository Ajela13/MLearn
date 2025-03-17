import DOMPurify from "dompurify";

const SafeHtmlContent = ({ html }) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default SafeHtmlContent;
