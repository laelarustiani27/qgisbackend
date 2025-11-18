var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kelurahan_Desa_2024_0 = format_LapakGIS_Batas_Kelurahan_Desa_2024_0.readFeatures(json_LapakGIS_Batas_Kelurahan_Desa_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0.addFeatures(features_LapakGIS_Batas_Kelurahan_Desa_2024_0);var lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0, 
                style: style_LapakGIS_Batas_Kelurahan_Desa_2024_0,
                title: '<img src="styles/legend/LapakGIS_Batas_Kelurahan_Desa_2024_0.png" /> LapakGIS_Batas_Kelurahan_Desa_2024'
            });

lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0];
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldAliases', {'WADMKD': 'WADMKD', 'TPS': 'TPS', 'Hadir': 'Hadir', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldImages', {'WADMKD': 'TextEdit', 'TPS': 'TextEdit', 'Hadir': 'TextEdit', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldLabels', {'WADMKD': 'inline label', 'TPS': 'inline label', 'Hadir': 'inline label', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});