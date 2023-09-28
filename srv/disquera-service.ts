import { Service } from "@sap/cds";
import { IGrabaciones } from "./entities";

export = (srv: Service) => {
  const { Musicos, Grabaciones } = srv.entities;

  // function
  srv.on("getMusicianByID", async (req) => {
    const { ID } = req.data;
    try {
      const musico = await SELECT.from(Musicos).where({ ID });
      return musico;
    } catch (error: any) {
      return req.error(502, error.message);
    }
  });

  // ACTION
  srv.on("softDelete", async (req) => {
    const data = req.data;
    const { ID } = data;
    try {
      await DELETE.from(Musicos).where({
        ID,
      });
    } catch (error: any) {
      return req.error(502, error.message);
    }
  });

  // Eliminar varios musicos
  srv.on("deleteMusicians", async (req) => {
    try {
      const request = await DELETE.from(Musicos, { ID: req.data.ID });
      return request;
    } catch (error: any) {
      return req.error(400, error.message);
    }
  });

  // Crear varios musicos
  srv.on("createMusicians", async (req) => {
    try {
      const request = await INSERT.into(Musicos, req.data.musicians);
      return request;
    } catch (error: any) {
      return req.error(400, error.message);
    }
  });

  // Verificar promociones en update
  // Cuando es un "CREATE", si o si pide que le otorgues un ID en el json
  // Sino, cuenta como un "UPDATE" pero sin actualizar nada
  srv.before(["UPDATE", "CREATE"], Grabaciones, async (req) => {
    const { horas_grabadas } = req.data as IGrabaciones;
    try {
      const promotion = horas_grabadas >= 6 ? true : false;
      req.data.promocion = promotion;
      req.data.horas_grabadas = promotion ? horas_grabadas - 2 : horas_grabadas;
    } catch (error: any) {
      return req.error(400, error.message);
    }
  });
};
