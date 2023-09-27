import React, { useState } from "react";
import { PlaceListItem } from "./PlaceListItem";
import { SideDrawer } from "./SideDrawer";
import Skelton from "./Skelton";

export type PlaceListItemProps = {
  business_status: string;
  formatted_address: string;
  geometry: {
    location: { lat: number; lng: number };
    viewport: {
      northeast: { lat: number; lng: number };
      southwest: { lat: number; lng: number };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos: Array<{
    height: number;
    html_attributions: Array<string>;
    photo_reference: string;
    width: number;
  }>;
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  types: Array<string>;
  user_ratings_total: number;
};

export type PlaceListType = {
  data: Array<PlaceListItemProps>;
};
function PlaceList({ data }: PlaceListType) {
  const [selectedPlace, setSelectedPlace] = useState<
    PlaceListItemProps | undefined
  >(undefined);

  const itemSelectionHandler = (item: PlaceListItemProps) => {
    console.log(item);
    setSelectedPlace(item);
  };

  const onClose = () => setSelectedPlace(undefined);

  return (
    <div className="px-[10px] md:px[120px] mt-7">
      <h2 className="text-[20px] font-bold">Search Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item, index) => {
          return (
            <div className="z-10" key={`item_${item.place_id}`}>
              <PlaceListItem onItemSelect={itemSelectionHandler} place={item} />
            </div>
          );
        })}
      </div>
      {selectedPlace && (
        <div className="fixed top-0 right-0 z-20">
          <SideDrawer item={selectedPlace} onDrawerClose={onClose} />
        </div>
      )}

      {data.length === 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7].map((item: number) => {
            return <Skelton key={`item_${item}`} />;
          })}
        </div>
      )}
    </div>
  );
}

export default PlaceList;
