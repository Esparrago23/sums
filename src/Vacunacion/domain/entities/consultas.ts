// 1. Total por vacuna y tipo de dosis (general o filtrado por persona)
export class VacunaDosisAplicacionDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     VacunaDosisAplicacionDTO:
     *       type: object
     *       properties:
     *         vacuna:
     *           type: string
     *           description: Nombre de la vacuna
     *         tipo_dosis:
     *           type: string
     *           description: Tipo de dosis aplicada
     *         total_aplicaciones:
     *           type: number
     *           description: Total de aplicaciones realizadas
     */
    constructor(
      public vacuna: string,
      public tipo_dosis: string,
      public total_aplicaciones: number
    ) {}
}

// 2. Personas vacunadas por cada vacuna
export class PersonasVacunadasPorVacunaDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     PersonasVacunadasPorVacunaDTO:
     *       type: object
     *       properties:
     *         vacuna:
     *           type: string
     *           description: Nombre de la vacuna
     *         personas_vacunadas:
     *           type: number
     *           description: Número total de personas vacunadas
     */
    constructor(
      public vacuna: string,
      public personas_vacunadas: number
    ) {}
}

// 3. Aplicaciones por año y vacuna
export class AplicacionesPorAnioVacunaDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     AplicacionesPorAnioVacunaDTO:
     *       type: object
     *       properties:
     *         año:
     *           type: number
     *           description: Año de la aplicación
     *         vacuna:
     *           type: string
     *           description: Nombre de la vacuna
     *         total:
     *           type: number
     *           description: Total de aplicaciones en el año
     */
    constructor(
      public año: number,
      public vacuna: string,
      public total: number
    ) {}
}

// 4. Vacunación segmentada por sexo
export class VacunacionPorSexoDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     VacunacionPorSexoDTO:
     *       type: object
     *       properties:
     *         sexo:
     *           type: string
     *           description: Sexo de la persona
     *         vacuna:
     *           type: string
     *           description: Nombre de la vacuna
     *         total_aplicaciones:
     *           type: number
     *           description: Total de aplicaciones por sexo
     */
    constructor(
      public sexo: string,
      public vacuna: string,
      public total_aplicaciones: number
    ) {}
}

// 5. Vacunación por rango de edad
export class VacunacionPorRangoEdadDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     VacunacionPorRangoEdadDTO:
     *       type: object
     *       properties:
     *         rango_edad:
     *           type: string
     *           description: Rango de edad (Menores de edad, Adultos, Adultos mayores)
     *         vacuna:
     *           type: string
     *           description: Nombre de la vacuna
     *         total_aplicaciones:
     *           type: number
     *           description: Total de aplicaciones por rango de edad
     */
    constructor(
      public rango_edad: string,
      public vacuna: string,
      public total_aplicaciones: number
    ) {}
}

// 6. Total de dosis aplicadas por persona
export class DosisPorPersonaDTO {
    /**
     * @swagger
     * components:
     *   schemas:
     *     DosisPorPersonaDTO:
     *       type: object
     *       properties:
     *         nombre_completo:
     *           type: string
     *           description: Nombre completo de la persona
     *         total_dosis_aplicadas:
     *           type: number
     *           description: Total de dosis aplicadas a la persona
     */
    constructor(
      public nombre_completo: string,
      public total_dosis_aplicadas: number
    ) {}
}
  