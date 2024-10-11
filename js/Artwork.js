"use strict";

export default class Artwork {
    constructor(title, dateDisplay, placeOfOrigin, genre, artist){
        this.title = title;
        this.date_display = dateDisplay;
        this.place_of_origin = placeOfOrigin;
        this.department_title = genre;
        this.artist_title = artist;
    }
    get htmlString() {
		return `
        <div class="frame">
			<h2 id="nameArtwork" >${this.title} </h2>
			<h3 id="dateDisplay" >${this.date_display} </h3>
			<h3 id="placeOfOrigin" >${this.place_of_origin}</h3>
			<h3 id="genre"> ${this.department_title}</h3>
			<h3 id="artist" >${this.artist_title}</h3>
		</div>`;
	}
}