export default function TopNav(props) {
    const { isViewer, handleToggleViewer, handleToggleMenu, savingNote
        , handleSaveNote } = props

    return (
        <>

            <div className="notes-btn">
                <button onClick={handleToggleMenu} className="card-button-primary menu">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <button onClick={handleSaveNote} disabled={savingNote} className="card-button-secondary">
                    <h6>{savingNote ? 'Saving...' : 'Save'}</h6>
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <button onClick={handleToggleViewer} className="card-button-secondary">
                    {isViewer ?
                        <>
                            <h6>Editor</h6>
                            <i className="fa-solid fa-pencil"></i>
                        </> :
                        <>
                            <h6>Viewer</h6>
                            <i className="fa-solid fa-check-double"></i>
                        </>
                    }
                </button>
            </div>
            <div className="full-line"></div>
        </>
    )
}