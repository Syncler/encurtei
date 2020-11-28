async componentDidMount() {
  const {code} = this.props.match.params;

  try {
    const service = new ShortenerService();
    const shortenedURL = await service.
    getStats(code);

    const parsedDate = parseISO(shortenedURL.updatedAt)
    const currentDate = new Date()

    const relativeDate = formatRelative(parsedDate, currentDate, {
      locale: ptBR
    })

    shortenedURL.relativeDate = relativeDate;

    this.setState({ isLoading: false, shortenedURL})
  } catch (err) {
    this.setState({ isLoading: false, errorMessage: 'A URL encurtada solicitada não existe'})
  }
}