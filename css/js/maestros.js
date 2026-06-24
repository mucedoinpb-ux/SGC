/*
=====================================================
MAESTROS GMP
=====================================================
*/

/*
=====================================================
TIPOS DOCUMENTALES
=====================================================
*/

const tiposDocumentales = [

    { codigo: "ANX", descripcion: "ANEXO" },
    { codigo: "CER", descripcion: "CERTIFICADO" },
    { codigo: "DOT", descripcion: "DOCUMENTO TÉCNICO" },
    { codigo: "ESP", descripcion: "ESPECIFICACIONES" },
    { codigo: "FOD", descripcion: "ANÁLISIS FODA" },
    { codigo: "GFA", descripcion: "GUÍA DE FABRICACIÓN" },
    { codigo: "IAA", descripcion: "INSTRUCTIVO DE ANTÍGENOS Y ANTISUEROS" },
    { codigo: "IAV", descripcion: "INSTRUCTIVO DE ANTIVENENO" },
    { codigo: "INS", descripcion: "INSTRUCTIVO" },
    { codigo: "MAC", descripcion: "MANUAL DE CALIDAD" },
    { codigo: "PLM", descripcion: "PLAN DE MEJORAS" },
    { codigo: "PLN", descripcion: "PLAN" },
    { codigo: "PLT", descripcion: "PLANTILLA" },
    { codigo: "POC", descripcion: "POLÍTICA DE CALIDAD" },
    { codigo: "POE", descripcion: "PROCEDIMIENTO OPERATIVO ESTÁNDAR" },
    { codigo: "PRT", descripcion: "PROTOCOLO" },
    { codigo: "REG", descripcion: "REGISTRO" },
    { codigo: "SMF", descripcion: "SITE MASTER FILE" },
    { codigo: "TAB", descripcion: "TABLA" },
    { codigo: "TDA", descripcion: "TÉCNICA DE ANÁLISIS" }

];

/*
=====================================================
ÁREAS GMP
=====================================================
*/

const actividades = [

    {
        codigo: "600",
        nombre: "Gestión de la Calidad",
        padre: null
    },

    {
        codigo: "238",
        nombre: "Producción",
        padre: null
    },

    {
        codigo: "300",
        nombre: "Control de Calidad",
        padre: null
    },

    {
        codigo: "301",
        nombre: "Microbiología",
        padre: "300"
    },

    {
        codigo: "302",
        nombre: "Fisicoquímico",
        padre: "300"
    },

    {
        codigo: "400",
        nombre: "Depósito",
        padre: null
    }

];
