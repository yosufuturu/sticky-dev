import { Header } from '../components/Header';
import { NoteBoard } from '../components/NoteBoard';
import { noteControl } from '../function/noteControl'

export const Top = () => {

        const {
            userNotesList,
            updateUserNotesList,
            showList,
            searchWord,
            updateSearchWord,
            changePinState,
            copyNote,
            eraseNote,
            addNote,
            editNote
        } = noteControl();
        

    return (
        <>
        <Header
            searchWord={searchWord}
            updateSearchWord={updateSearchWord} />
        <NoteBoard
            userNotesList={userNotesList}
            updateUserNotesList={updateUserNotesList}
            showList={showList}
            changePinState={changePinState}
            copyNote={copyNote}
            eraseNote={eraseNote}
            addNote={addNote}
            editNote={editNote} 
            />
        </>
    );
};
