const style = {
    content: {
        width: 355,
        margin: "auto",
        marginTop: 30,
    },
    head: {
        display: "flex",
    },
    logo: {
        fontFamily: "sans-serif",
        flex: 1,
        fontWeight: "700",
        fontSize: 60,
        color: "#776e65",
    },
    blockStyle: {
        height: 80,
        width: 80,
        background: "lightgray",
        margin: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 45,
        fontWeight: "800",
        color: "white",
    },
    newGameButtonBlock:{
        flex: 1,
        marginTop: "auto",
    },
    newGameButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width: 95,
        borderRadius: 7,
        fontWeight: "900",
        marginLeft: "auto",
        marginBottom: "auto",
        cursor: "pointer",
    },
    playingАield:{
        background: "#AD9D8F",
        width: "max-content",
        height: "max-content",
        margin: "auto",
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        position: "relative",
    },
    tryAgainButtonBlock:{

    },
    tryAgainButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width: 80,
        borderRadius: 7,
        fontWeight: "900",
        cursor: "pointer",
        margin: "auto",
        marginTop: 20,
    },
    gameOverOverlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        borderRadius: 5,
        background: "rgba(238,228,218,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    gameOverOverlayMessage:{
        fontSize: 30,
        fontFamily: "sans-serif",
        fontWeight: "900",
        color: "#776E65",
    }
};

export default style;