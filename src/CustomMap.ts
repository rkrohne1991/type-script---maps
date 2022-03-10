import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center,
        zoom: 1,
      }
    );
  }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
