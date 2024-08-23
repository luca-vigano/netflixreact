import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FilmCard from "./FilmCard"



class NetflixGalleria extends Component {

    state = {
        film: [],
    }

    componentDidMount = () => {
        this.fetchBatman()
    }


    fetchBatman =()=> {
            fetch("https://www.omdbapi.com/?apikey=5ace13d8&s="+this.props.search)
            .then((response)=>{
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error ("La chiamata non è andata a buon fine")
                }
            })
            .then((filmsearch) => {
                this.setState({
                    film:filmsearch.Search,
                })
                console.log(filmsearch.Search)
            })
            .catch((err) =>{
                console.log("ERRORE RECUPERO DATI", err)
            })
    }
    render() {
        return (
            <Container fluid className="bg-dark m-0">
                <Row>
                    <Col sm={12} className="text-light" >
                    <h4>{this.props.search}</h4>
                    </Col>
                    {this.state.film.map((film) => {
                        return (
                            <FilmCard film={film} key= {film.imdbID} />
                        )
                    })
                    }
                </Row>
            </Container>

        )
    }
}

export default NetflixGalleria