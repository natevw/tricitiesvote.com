const Fields = `
type Fields {
  slug:             String
  lettersyes_html:  String
  lettersno_html:   String
  bio_html:         String
  articles_html:    String
  engagement_html:  String
  body_html:        String
  statement_html:   String

  statement_excerpt_html:  String
  body_excerpt_html:       String
  bio_excerpt_html:        String

  lettersyes_html_nowrap:  String
  lettersno_html_nowrap:   String
  bio_html_nowrap:         String
  articles_html_nowrap:    String
  body_html_nowrap:        String
  fundraising:             CandidateFundraisingJson @link(by: "id", from: "fundraising")
  responder:               CandidatesJson @link(by: "uuid", from: "responder")
  
}
`;

export default Fields;
