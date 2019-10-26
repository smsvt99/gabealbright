const styles = {
    values: {

    },
    underlineOnHover: {
        cursor: 'pointer',
        ':hover': {
            textDecoration: 'underline !important'
        }
    },
    growOnHover: {
        transition: 'all .2s',
        ':hover': {
            transform: 'scale(1.1)'
        }
    },
    button: {
            border: '1px solid black',
            display:'inline-block',
            cursor:'pointer',
            fontSize:'20px',
            boxShadow: 'grey 2px 2px 2px',
            margin: '5px 0 5px 0',
            ':hover' : {
                backgroundColor: 'white',
                boxShadow: 'none'
        }
    },
    textBlock : {
        margin: '0 auto 0 auto',
        fontSize: '20px',
        lineHeight: '1.2',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: '20px',
        border: '1px solid black',
        display: 'flex',
        maxWidth: '600px',
        '@media(max-width: 550px)' : {
            width: '350px'
        },
        '@media(max-width: 500px)' : {
            width: '300px'
        },
        '@media(max-width: 400px)' : {
            width: '250px'
        },
        '@media(max-width: 350px)' : {
            width: '200px'
        }
    },
    flexColumn : {
        display: 'flex',
        flexDirection: 'column'
    },
    flexRow : {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },
    input : {
        border: '1px solid grey',
        borderRadius: '10px',
        fontSize: '20px',
        margin: '5px 0 5px 0'
    },
    sisterFont : {
        fontFamily: 'Love Ya Like A Sister, cursive',
    }
    

}

export default styles;