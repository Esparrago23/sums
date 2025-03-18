export class Direccion {
    constructor(
        public id: number,
        public calle: string,
        public numero_exterior: string,
        public colonia: string,
        public municipio: string,
        public entidad: string,
        public codigo_postal: string
    ) {}
}