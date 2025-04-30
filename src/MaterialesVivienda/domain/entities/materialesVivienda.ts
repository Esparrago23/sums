export class MaterialesVivienda {
    constructor(
        public id: number,
        public vivienda_id: number,
        public tipo: string,
        public material: string,
        public especificacion: string
    ) {}
}