import '../assets/styles/footer.less'

export default {
    data() {
        return {
            author: 'Clloz'
        }
    },
    render() {
        return(
            <div id="footer">
                <span>Writter by {this.author}</span>
            </div>
        )
    },
};