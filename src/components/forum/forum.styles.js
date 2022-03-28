/* eslint-disable import/prefer-default-export */
export const styles = {
  askPage: {
    outerBox: { marginTop: 3, marginBottom: 3, display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', width: '90%', justifyContent: 'center', textAlign: 'center', maxWidth: '1500px' },
    topDiv: { display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '5px' },
    allQuestionsText: { border: 2, borderRadius: 2, p: 1, boxShadow: 2 },
    searchFilterDiv: { display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '10px' },
    divider: { borderBottomWidth: '3px', marginTop: '15px', background: 'black', borderRadius: 3 },
    pagination: { marginLeft: 'auto', marginRight: 'auto' },
  },
  questions: {
    list: { width: '100%', bgcolor: 'background.paper' },
    title: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    description: { marginBottom: '5px', marginTop: '2px', color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    divContainer: { display: 'flex', justifyContent: 'left' },
    box: { display: 'flex', marginTop: 1 },
    commentBox: { display: 'flex', marginTop: 1, ml: 2 },
    userDiv: { marginTop: '5px', marginLeft: '20px', display: 'inline' },
    username: { display: 'inline', color: 'text.primary' },
    asked: { display: 'inline', color: 'text.secondary' },
  },
  askQuestionModal: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 },
  displayQuestion: {
    outerBox: { marginTop: 2, marginBottom: 3, display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', width: '95%', justifyContent: 'center', maxWidth: '1500px' },
    topDiv: { marginLeft: '20px', marginRight: '20px', display: 'flex', justifyContent: 'space-between', position: 'relative' },
    username: { display: 'inline', color: 'text.primary' },
    asked: { display: 'inline', color: 'text.secondary' },
    titleBox: { backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' },
    titleDiv: { marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '10px', color: '#0000AA', textDecoration: 'underline' },
    descriptionBox: { backgroundColor: '#E8E6E6', marginLeft: 'auto', marginRight: 'auto', width: '98%', borderRadius: 2, marginTop: '10px' },
    descriptionDiv: { marginTop: '10px', marginLeft: '15px', marginRight: '15px', marginBottom: '15px' },
    imageBox: { marginLeft: '15px', marginTop: '10px' },
    imageText: { display: 'block', textDecoration: 'underline' },
    image: { maxWidth: '1200px', maxHeight: '1000px', marginTop: '10px', marginBottom: '10px', borderRadius: 10 },
  },
  voting: {
    outerDiv: { display: 'flex', position: 'relative', border: '1px solid black', paddingRight: '10px', borderRadius: '10px' },
  },
  search: {
    paper: { p: '2px 4px', display: 'flex', width: 400, border: 1 },
    input: { ml: 1, flex: 1 },
  },
  deleteDialog: {
    button: { color: '#EE3233', marginBottom: '2%', marginTop: '2%', boxShadow: 5 },
  },
  commentArea: { marginLeft: '15px', marginRight: '15px', marginTop: '15px' },
  commentLoadingButton: {
    outerBox: { display: 'flex', alignItems: 'center', marginTop: '5px' },
  },
  comments: {
    listDiv: { marginLeft: '15px', marginRight: '15px', marginTop: '15px' },
    listBox: { display: 'flex', marginTop: '15px' },
    list: { width: '100%', bgcolor: 'background.paper' },
    description: { marginBottom: '5px', marginTop: '2px', whiteSpace: 'pre-line' },
    usernameDiv: { marginTop: '5px', display: 'inline' },
    usernameText: { display: 'inline', color: 'text.primary' },
    commented: { display: 'inline', color: 'text.secondary' },
  },
};
