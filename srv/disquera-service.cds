using sap.capire.disquera from '../db/schema';

service DisqueraService {

    entity Discos      as projection on disquera.Discos {
        ID,
        nombre                      as nombre_disco,
        banda.banda.nombre          as nombre_banda,
        numeroCanciones             as cantidad_canciones,
        centroDistribuciones.nombre as distribuidor,
    };

    entity Musicos     as projection on disquera.Musicos;

    entity Grabaciones as projection on disquera.Grabaciones {
        ID,
        createdAt,
        modifiedAt,
        disco.nombre             as nombre_disco,
        disco.banda.banda.nombre as nombre_banda,
        disco.banda.banda.genero as genero_banda,
        musico.apellido          as musico_apellido,
        musico.nombre            as musico_nombre,
        horas                    as horas_grabadas,
        promocion
    };

    action   softDelete(ID : Integer);
    action   createMusicians(musicians : array of Musicos);
    action   deleteMusicians(ID : array of Integer);
    function getMusicianByID(ID : Integer) returns Musicos;


};
