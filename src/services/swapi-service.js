export default class SwapiService {
  constructor() {
    this.apiBase = 'https://swapi.co/api';
  }

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource('/people/');
    return res.results.map(SwapiService.transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return SwapiService.transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource('/planets/');
    return res.results.map(SwapiService.transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return SwapiService.transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource('/starships/');
    return res.results.map(SwapiService.transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return SwapiService.transformStarship(starship);
  }

  static extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    const [, id] = item.url.match(idRegExp);
    return id;
  }

  static transformPerson(person) {
    const {
      name, gender, birthYear, eyeColor,
    } = person;

    return {
      id: SwapiService.extractId(person),
      name,
      gender,
      birthYear,
      eyeColor,
    };
  }

  static transformPlanet(planet) {
    const {
      name, population, rotation_period: rotationPeriod, diameter,
    } = planet;

    return {
      id: SwapiService.extractId(planet),
      name,
      population,
      rotationPeriod,
      diameter,
    };
  }

  static transformStarship(starship) {
    const {
      name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity,
    } = starship;

    return {
      id: SwapiService.extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    };
  }
}
