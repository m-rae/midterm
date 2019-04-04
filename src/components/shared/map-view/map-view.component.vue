<template>
    <div id="mapView">
        <div class="map-view-wrapper">
            <div class="address-list-wrapper">

            </div>
            <div class="map-wrapper">
                <GmapMap
                    :center="{lat:10, lng:10}"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 500px; height: 300px"
                    >
                    <GmapMarker
                        v-for="(m, index) in markers"
                        :key="index"
                        :position="m.position"
                    />
                </GmapMap>
            </div>
        </div>
    </div>
</template>
<script src="./map-view.component.js"></script>
<style src="./map-view.component.css" scoped></style>