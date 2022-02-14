var wms_layers = [];

var format_sougy_0 = new ol.format.GeoJSON();
var features_sougy_0 = format_sougy_0.readFeatures(json_sougy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sougy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sougy_0.addFeatures(features_sougy_0);
var lyr_sougy_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sougy_0, 
                style: style_sougy_0,
                interactive: true,
                title: '<img src="styles/legend/sougy_0.png" /> sougy'
            });
var format_saintjean_1 = new ol.format.GeoJSON();
var features_saintjean_1 = format_saintjean_1.readFeatures(json_saintjean_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saintjean_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saintjean_1.addFeatures(features_saintjean_1);
var lyr_saintjean_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saintjean_1, 
                style: style_saintjean_1,
                interactive: true,
                title: '<img src="styles/legend/saintjean_1.png" /> saintjean'
            });
var format_sainthilaire_2 = new ol.format.GeoJSON();
var features_sainthilaire_2 = format_sainthilaire_2.readFeatures(json_sainthilaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sainthilaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sainthilaire_2.addFeatures(features_sainthilaire_2);
var lyr_sainthilaire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sainthilaire_2, 
                style: style_sainthilaire_2,
                interactive: true,
                title: '<img src="styles/legend/sainthilaire_2.png" /> sainthilaire'
            });
var format_neuvilles_3 = new ol.format.GeoJSON();
var features_neuvilles_3 = format_neuvilles_3.readFeatures(json_neuvilles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neuvilles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neuvilles_3.addFeatures(features_neuvilles_3);
var lyr_neuvilles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_neuvilles_3, 
                style: style_neuvilles_3,
                interactive: true,
                title: '<img src="styles/legend/neuvilles_3.png" /> neuvilles'
            });
var format_ferolles_4 = new ol.format.GeoJSON();
var features_ferolles_4 = format_ferolles_4.readFeatures(json_ferolles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferolles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferolles_4.addFeatures(features_ferolles_4);
var lyr_ferolles_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ferolles_4, 
                style: style_ferolles_4,
                interactive: true,
                title: '<img src="styles/legend/ferolles_4.png" /> ferolles'
            });
var format_chailly_5 = new ol.format.GeoJSON();
var features_chailly_5 = format_chailly_5.readFeatures(json_chailly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chailly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chailly_5.addFeatures(features_chailly_5);
var lyr_chailly_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chailly_5, 
                style: style_chailly_5,
                interactive: true,
                title: '<img src="styles/legend/chailly_5.png" /> chailly'
            });
var format_bou1_6 = new ol.format.GeoJSON();
var features_bou1_6 = format_bou1_6.readFeatures(json_bou1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bou1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bou1_6.addFeatures(features_bou1_6);
var lyr_bou1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bou1_6, 
                style: style_bou1_6,
                interactive: true,
                title: '<img src="styles/legend/bou1_6.png" /> bou1'
            });

        var lyr_OpenStreetMap_7 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Atelierdetransformation_8 = new ol.format.GeoJSON();
var features_Atelierdetransformation_8 = format_Atelierdetransformation_8.readFeatures(json_Atelierdetransformation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atelierdetransformation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atelierdetransformation_8.addFeatures(features_Atelierdetransformation_8);
var lyr_Atelierdetransformation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Atelierdetransformation_8, 
                style: style_Atelierdetransformation_8,
                interactive: true,
                title: '<img src="styles/legend/Atelierdetransformation_8.png" /> Atelier de transformation'
            });
var format_Limitedudpartement_9 = new ol.format.GeoJSON();
var features_Limitedudpartement_9 = format_Limitedudpartement_9.readFeatures(json_Limitedudpartement_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitedudpartement_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedudpartement_9.addFeatures(features_Limitedudpartement_9);
var lyr_Limitedudpartement_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitedudpartement_9, 
                style: style_Limitedudpartement_9,
                interactive: true,
                title: '<img src="styles/legend/Limitedudpartement_9.png" /> Limite du département'
            });
var format_AlexandreGoueffon_10 = new ol.format.GeoJSON();
var features_AlexandreGoueffon_10 = format_AlexandreGoueffon_10.readFeatures(json_AlexandreGoueffon_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlexandreGoueffon_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlexandreGoueffon_10.addFeatures(features_AlexandreGoueffon_10);
var lyr_AlexandreGoueffon_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlexandreGoueffon_10, 
                style: style_AlexandreGoueffon_10,
                interactive: true,
                title: '<img src="styles/legend/AlexandreGoueffon_10.png" /> Alexandre Goueffon'
            });
var format_LaFermedesPerrieres_11 = new ol.format.GeoJSON();
var features_LaFermedesPerrieres_11 = format_LaFermedesPerrieres_11.readFeatures(json_LaFermedesPerrieres_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaFermedesPerrieres_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaFermedesPerrieres_11.addFeatures(features_LaFermedesPerrieres_11);
var lyr_LaFermedesPerrieres_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaFermedesPerrieres_11, 
                style: style_LaFermedesPerrieres_11,
                interactive: true,
                title: '<img src="styles/legend/LaFermedesPerrieres_11.png" /> La Ferme des Perrieres'
            });
var format_LafermedeRomaison_12 = new ol.format.GeoJSON();
var features_LafermedeRomaison_12 = format_LafermedeRomaison_12.readFeatures(json_LafermedeRomaison_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LafermedeRomaison_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LafermedeRomaison_12.addFeatures(features_LafermedeRomaison_12);
var lyr_LafermedeRomaison_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LafermedeRomaison_12, 
                style: style_LafermedeRomaison_12,
                interactive: true,
                title: '<img src="styles/legend/LafermedeRomaison_12.png" /> La ferme de Romaison'
            });
var format_LaBcheMel_13 = new ol.format.GeoJSON();
var features_LaBcheMel_13 = format_LaBcheMel_13.readFeatures(json_LaBcheMel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaBcheMel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaBcheMel_13.addFeatures(features_LaBcheMel_13);
var lyr_LaBcheMel_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaBcheMel_13, 
                style: style_LaBcheMel_13,
                interactive: true,
                title: '<img src="styles/legend/LaBcheMel_13.png" /> La Bêche à Mel'
            });
var format_Auxlgumesclestes_14 = new ol.format.GeoJSON();
var features_Auxlgumesclestes_14 = format_Auxlgumesclestes_14.readFeatures(json_Auxlgumesclestes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Auxlgumesclestes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Auxlgumesclestes_14.addFeatures(features_Auxlgumesclestes_14);
var lyr_Auxlgumesclestes_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Auxlgumesclestes_14, 
                style: style_Auxlgumesclestes_14,
                interactive: true,
                title: '<img src="styles/legend/Auxlgumesclestes_14.png" /> Aux légumes célestes'
            });
var format_Aujardindubrandalon_15 = new ol.format.GeoJSON();
var features_Aujardindubrandalon_15 = format_Aujardindubrandalon_15.readFeatures(json_Aujardindubrandalon_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aujardindubrandalon_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aujardindubrandalon_15.addFeatures(features_Aujardindubrandalon_15);
var lyr_Aujardindubrandalon_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aujardindubrandalon_15, 
                style: style_Aujardindubrandalon_15,
                interactive: true,
                title: '<img src="styles/legend/Aujardindubrandalon_15.png" /> Au jardin du brandalon'
            });
var format_BrunoVincent_16 = new ol.format.GeoJSON();
var features_BrunoVincent_16 = format_BrunoVincent_16.readFeatures(json_BrunoVincent_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrunoVincent_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrunoVincent_16.addFeatures(features_BrunoVincent_16);
var lyr_BrunoVincent_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BrunoVincent_16, 
                style: style_BrunoVincent_16,
                interactive: true,
                title: '<img src="styles/legend/BrunoVincent_16.png" /> Bruno Vincent'
            });
var format_Aujardindubonheur_17 = new ol.format.GeoJSON();
var features_Aujardindubonheur_17 = format_Aujardindubonheur_17.readFeatures(json_Aujardindubonheur_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aujardindubonheur_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aujardindubonheur_17.addFeatures(features_Aujardindubonheur_17);
var lyr_Aujardindubonheur_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aujardindubonheur_17, 
                style: style_Aujardindubonheur_17,
                interactive: true,
                title: '<img src="styles/legend/Aujardindubonheur_17.png" /> Au jardin du bonheur'
            });
var format_Etapesdetrajet_18 = new ol.format.GeoJSON();
var features_Etapesdetrajet_18 = format_Etapesdetrajet_18.readFeatures(json_Etapesdetrajet_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etapesdetrajet_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etapesdetrajet_18.addFeatures(features_Etapesdetrajet_18);
var lyr_Etapesdetrajet_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Etapesdetrajet_18, 
                style: style_Etapesdetrajet_18,
                interactive: true,
                title: '<img src="styles/legend/Etapesdetrajet_18.png" /> Etapes de trajet'
            });
var format_Localisationdesproducteurs_19 = new ol.format.GeoJSON();
var features_Localisationdesproducteurs_19 = format_Localisationdesproducteurs_19.readFeatures(json_Localisationdesproducteurs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localisationdesproducteurs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localisationdesproducteurs_19.addFeatures(features_Localisationdesproducteurs_19);
var lyr_Localisationdesproducteurs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localisationdesproducteurs_19, 
                style: style_Localisationdesproducteurs_19,
                interactive: true,
                title: '<img src="styles/legend/Localisationdesproducteurs_19.png" /> Localisation des producteurs'
            });
var format_commmunesproduction_20 = new ol.format.GeoJSON();
var features_commmunesproduction_20 = format_commmunesproduction_20.readFeatures(json_commmunesproduction_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commmunesproduction_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commmunesproduction_20.addFeatures(features_commmunesproduction_20);
var lyr_commmunesproduction_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_commmunesproduction_20, 
                style: style_commmunesproduction_20,
                interactive: true,
                title: '<img src="styles/legend/commmunesproduction_20.png" /> commmunesproduction'
            });
var group_Communesdesproductions = new ol.layer.Group({
                                layers: [lyr_sougy_0,lyr_saintjean_1,lyr_sainthilaire_2,lyr_neuvilles_3,lyr_ferolles_4,lyr_chailly_5,lyr_bou1_6,],
                                title: "Communes des productions"});

lyr_sougy_0.setVisible(true);lyr_saintjean_1.setVisible(true);lyr_sainthilaire_2.setVisible(true);lyr_neuvilles_3.setVisible(true);lyr_ferolles_4.setVisible(true);lyr_chailly_5.setVisible(true);lyr_bou1_6.setVisible(true);lyr_OpenStreetMap_7.setVisible(true);lyr_Atelierdetransformation_8.setVisible(true);lyr_Limitedudpartement_9.setVisible(true);lyr_AlexandreGoueffon_10.setVisible(true);lyr_LaFermedesPerrieres_11.setVisible(true);lyr_LafermedeRomaison_12.setVisible(true);lyr_LaBcheMel_13.setVisible(true);lyr_Auxlgumesclestes_14.setVisible(true);lyr_Aujardindubrandalon_15.setVisible(true);lyr_BrunoVincent_16.setVisible(true);lyr_Aujardindubonheur_17.setVisible(true);lyr_Etapesdetrajet_18.setVisible(true);lyr_Localisationdesproducteurs_19.setVisible(true);lyr_commmunesproduction_20.setVisible(true);
var layersList = [group_Communesdesproductions,lyr_OpenStreetMap_7,lyr_Atelierdetransformation_8,lyr_Limitedudpartement_9,lyr_AlexandreGoueffon_10,lyr_LaFermedesPerrieres_11,lyr_LafermedeRomaison_12,lyr_LaBcheMel_13,lyr_Auxlgumesclestes_14,lyr_Aujardindubrandalon_15,lyr_BrunoVincent_16,lyr_Aujardindubonheur_17,lyr_Etapesdetrajet_18,lyr_Localisationdesproducteurs_19,lyr_commmunesproduction_20];
lyr_sougy_0.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_saintjean_1.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_sainthilaire_2.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_neuvilles_3.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_ferolles_4.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_chailly_5.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', });
lyr_bou1_6.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Atelierdetransformation_8.set('fieldAliases', {'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'nom': 'nom', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Limitedudpartement_9.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', });
lyr_AlexandreGoueffon_10.set('fieldAliases', {'id': 'id', 'trajetgoue': 'trajetgoue', 'Nom': 'Nom', });
lyr_LaFermedesPerrieres_11.set('fieldAliases', {'id': 'id', 'TrajetFPer': 'TrajetFPer', 'Nom': 'Nom', });
lyr_LafermedeRomaison_12.set('fieldAliases', {'id': 'id', 'romaisondi': 'romaisondi', 'Nom': 'Nom', });
lyr_LaBcheMel_13.set('fieldAliases', {'id': 'id', 'trajetbech': 'trajetbech', 'Nom': 'Nom', });
lyr_Auxlgumesclestes_14.set('fieldAliases', {'id': 'id', 'Trajets': 'Trajets', 'Nom': 'Nom', });
lyr_Aujardindubrandalon_15.set('fieldAliases', {'id': 'id', 'Brandalon': 'Brandalon', 'Nom': 'Nom', });
lyr_BrunoVincent_16.set('fieldAliases', {'id': 'id', 'directBV': 'directBV', 'Nom': 'Nom', });
lyr_Aujardindubonheur_17.set('fieldAliases', {'id': 'id', 'jardinbonh': 'jardinbonh', 'Nom': 'Nom', });
lyr_Etapesdetrajet_18.set('fieldAliases', {'Itinéraire': 'Itinéraire', 'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'Horaires': 'Horaires', });
lyr_Localisationdesproducteurs_19.set('fieldAliases', {'communes': 'communes', 'longitude': 'longitude', 'latitude': 'latitude', 'nom struct': 'nom struct', 'nom': 'nom', 'Vente': 'Vente', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_commmunesproduction_20.set('fieldAliases', {'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', '_mean': '_mean', '_mean_1': '_mean_1', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'layer': 'layer', 'path': 'path', });
lyr_sougy_0.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_saintjean_1.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_sainthilaire_2.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_neuvilles_3.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_ferolles_4.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_chailly_5.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', });
lyr_bou1_6.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Atelierdetransformation_8.set('fieldImages', {'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'nom': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Limitedudpartement_9.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', });
lyr_AlexandreGoueffon_10.set('fieldImages', {'id': 'TextEdit', 'trajetgoue': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LaFermedesPerrieres_11.set('fieldImages', {'id': 'TextEdit', 'TrajetFPer': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LafermedeRomaison_12.set('fieldImages', {'id': 'TextEdit', 'romaisondi': 'TextEdit', 'Nom': 'TextEdit', });
lyr_LaBcheMel_13.set('fieldImages', {'id': 'TextEdit', 'trajetbech': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Auxlgumesclestes_14.set('fieldImages', {'id': 'TextEdit', 'Trajets': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Aujardindubrandalon_15.set('fieldImages', {'id': 'TextEdit', 'Brandalon': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BrunoVincent_16.set('fieldImages', {'id': 'TextEdit', 'directBV': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Aujardindubonheur_17.set('fieldImages', {'id': 'TextEdit', 'jardinbonh': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Etapesdetrajet_18.set('fieldImages', {'Itinéraire': 'TextEdit', 'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Horaires': '', });
lyr_Localisationdesproducteurs_19.set('fieldImages', {'communes': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'nom struct': 'TextEdit', 'nom': 'TextEdit', 'Vente': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_commmunesproduction_20.set('fieldImages', {'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', '_mean': 'TextEdit', '_mean_1': 'TextEdit', 'auxiliary_': '', 'auxiliar_1': '', 'layer': '', 'path': '', });
lyr_sougy_0.set('fieldLabels', {});
lyr_saintjean_1.set('fieldLabels', {});
lyr_sainthilaire_2.set('fieldLabels', {});
lyr_neuvilles_3.set('fieldLabels', {});
lyr_ferolles_4.set('fieldLabels', {});
lyr_chailly_5.set('fieldLabels', {});
lyr_bou1_6.set('fieldLabels', {});
lyr_Atelierdetransformation_8.set('fieldLabels', {'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'nom': 'no label', });
lyr_Limitedudpartement_9.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', '_mean': 'no label', '_mean_1': 'no label', });
lyr_AlexandreGoueffon_10.set('fieldLabels', {'id': 'no label', 'trajetgoue': 'no label', 'Nom': 'no label', });
lyr_LaFermedesPerrieres_11.set('fieldLabels', {'id': 'no label', 'TrajetFPer': 'no label', 'Nom': 'no label', });
lyr_LafermedeRomaison_12.set('fieldLabels', {'id': 'no label', 'romaisondi': 'no label', 'Nom': 'no label', });
lyr_LaBcheMel_13.set('fieldLabels', {'id': 'no label', 'trajetbech': 'no label', 'Nom': 'no label', });
lyr_Auxlgumesclestes_14.set('fieldLabels', {'id': 'no label', 'Trajets': 'no label', 'Nom': 'no label', });
lyr_Aujardindubrandalon_15.set('fieldLabels', {'id': 'no label', 'Brandalon': 'no label', 'Nom': 'no label', });
lyr_BrunoVincent_16.set('fieldLabels', {'id': 'no label', 'directBV': 'no label', 'Nom': 'no label', });
lyr_Aujardindubonheur_17.set('fieldLabels', {'id': 'no label', 'jardinbonh': 'no label', 'Nom': 'no label', });
lyr_Etapesdetrajet_18.set('fieldLabels', {'Itinéraire': 'no label', 'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'Horaires': 'no label', });
lyr_Localisationdesproducteurs_19.set('fieldLabels', {'communes': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'nom struct': 'no label', 'nom': 'no label', 'Vente': 'no label', });
lyr_commmunesproduction_20.set('fieldLabels', {'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', '_mean': 'no label', '_mean_1': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_commmunesproduction_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});