// CandidatesJson @link(by: "uuid", from: "candidate")
const EndorsementsJson = `
type EndorsementsCsv implements Node {
  candidate:        String
  type:             String
  endorser:         String
  forAgainst:       String
  url:              String
}
`;

export default EndorsementsJson;
