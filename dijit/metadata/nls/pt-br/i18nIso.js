// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"ISO 19115 (Dados)",description:""},service:{caption:"ISO 19119 (Serviço)",description:""},gmi:{caption:"ISO 19115-2 Dados de Grid e Imagens)",description:""}},general:{reference:"Referência"},sections:{metadata:"Metadados",identification:"Identificação",distribution:"Distribuição",quality:"Qualidade",acquisition:"Aquisição"},metadataSection:{identifier:"Identificador",contact:"Contato",date:"Data",standard:"Padrão",reference:"Referência"},identificationSection:{citation:"Referência",description:"Descrição",contact:"Contato",thumbnail:"Miniatura",keywords:"Palavras-Chaves",constraints:"Restrições",resource:"Recurso",resourceTab:{representation:"Representação",language:"Idioma",classification:"Classificação",extent:"Extensão"},serviceResourceTab:{serviceType:"Tipo de Serviço",extent:"Extensão",couplingType:"Tipo de Associação",operation:"Operação",operatesOn:"Opera Em"}},distributionSection:{},qualitySection:{scope:"Escopo",conformance:"Conformidade",lineage:"Linhagem"},acquisitionSection:{requirement:"Requisitos",objective:"Objetivo",instrument:"Instrumento",plan:"Plano",operation:"Operação",platform:"Plataforma",environment:"Ambiente"},AbstractMD_Identification:{sAbstract:"Resumo",purpose:"Finalidade",credit:"Créditos",pointOfContact:"Ponto de Contato",resourceMaintenance:"Manutenção",graphicOverview:"Visão Geral do Gráfico",descriptiveKeywords:"Coleção de Palavra-Chave",resourceConstraints:"Restrições"},CI_Address:{deliveryPoint:"Pontos de Entrega",city:"Cidade",administrativeArea:"Área Administrativa",postalCode:"Código Postal",country:"País",electronicMailAddress:"Endereço de Correio Eletrônico"},CI_Citation:{title:"Título",alternateTitle:"Alternar Título",identifier:"Identificador de Recurso Único",resource:{title:"Título do Recurso",date:"Data do Recurso"},specification:{title:"Título de Especificação",date:"Data de Especificação"}},CI_Contact:{phone:"Telefone",address:"Endereço",onlineResource:"Recurso On-Line",hoursOfService:"Horas de Serviço",contactInstructions:"Instruções de Contato"},CI_Date:{date:"Data",dateType:"Tipo de Data"},CI_DateTypeCode:{caption:"Tipo de Data",creation:"Data de Criação",publication:"Data de Publicação",revision:"Data de Revisão"},CI_OnLineFunctionCode:{caption:"Função",download:"Download",information:"Informações",offlineAccess:"Acesso Desconectado",order:"Ordem",search:"Pesquisar"},CI_OnlineResource:{caption:"Recurso On-Line",linkage:"URL",protocol:"Protocolo",applicationProfile:"Perfil do Aplicativo",name:"Nome",description:"Descrição",sFunction:"Função"},CI_ResponsibleParty:{caption:"Ponto de Contato",individualName:"Nome Individual",organisationName:"Nome da Organização",positionName:"Nome de Posição",contactInfo:"Informações de Contato",role:"Função"},CI_RoleCode:{caption:"Função",resourceProvider:"Provedor de Recurso",custodian:"Administrador",owner:"Proprietário",user:"Usuário",distributor:"Distribuidor",originator:"Criador",pointOfContact:"Ponto de Contato",principalInvestigator:"Investigador Principal",processor:"Processador",publisher:"Publicador",author:"Autor do"},CI_Telephone:{voice:"Voz",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Resultado de Conformidade",explanation:"Explanação",degree:{caption:"Graus",validationPerformed:"Validação Executada",conformant:"Conforme",nonConformant:"Não Conforme"}},DQ_DataQuality:{report:"Relatório"},DQ_Scope:{level:"Escopo (informações de qualidade aplicadas em)",levelDescription:"Descrição do Nível"},EX_Extent:{caption:"Extensão",description:"Descrição",geographicElement:"Extensão Espacial",temporalElement:"Extensão Temporal",verticalElement:"Extensão Vertical"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitude de Limite Oeste",eastBoundLongitude:"Longitude de Limite Leste",southBoundLatitude:"Latitude de Limite Sul",northBoundLatitude:"Latitude de Limite Norte"},EX_GeographicDescription:{caption:"Descrição Geográfica"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Data Inicial",endPosition:"Data Final"}},EX_VerticalExtent:{minimumValue:"Valor Mínimo",maximumValue:"Valor Máximo",verticalCRS:"CRS Vertical"},Length:{caption:"Comprimento",uom:"Unidades de Medida",km:"Quilômetros",m:"Metros",mi:"Milhas",ft:"Pés"},LI_Lineage:{statement:"Declaração de Linhagem"},MD_BrowseGraphic:{fileName:"Procurar URL de Gráfico",fileDescription:"Procurar Legenda do Gráfico",fileType:"Procurar Tipo de Gráfico"},MD_ClassificationCode:{unclassified:"Não classificado",restricted:"Restrito",confidential:"Confidencial",secret:"Secreto",topSecret:"Secreto"},MD_Constraints:{caption:"Restrições de Uso",useLimitation:"Limitação de Uso"},MD_DataIdentification:{spatialRepresentationType:"Tipo de Representação Espacial",spatialResolution:"Resolução Espacial",language:"Idioma do Recurso",supplementalInformation:"Suplementar"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Formato de Distribuição",transferOptions:"Opções de Transferência"},MD_Format:{name:"Nome do Formato",version:"Versão do Formato"},MD_Identifier:{caption:"URI",identifierCaption:"Identificador",code:"Código"},MD_Keywords:{delimitedCaption:"Palavras-Chaves",thesaurusName:"Dicionário de Sinônimos Associado"},MD_KeywordTypeCode:{caption:"Tipo de Palavra-Chave",discipline:"Disciplina",place:"Posicionar",stratum:"Estrato",temporal:"Temporal",theme:"Tema"},MD_LegalConstraints:{caption:"Restrições Válidas",accessConstraints:"Restrições de Acesso",useConstraints:"Restrições de Uso",otherConstraints:"Outras Restrições"},MD_MaintenanceFrequencyCode:{caption:"Frequência",continual:"Contínuo",daily:"Diariamente",weekly:"Semanalmente",fortnightly:"Quinzenal",monthly:"Mensalmente",quarterly:"Trimestral",biannually:"Semestral",annually:"Anualmente",asNeeded:"Conforme Necessário",irregular:"Irregular",notPlanned:"Não Planejado",unknown:"Desconhecido"},MD_Metadata:{caption:"Metadados",fileIdentifier:"Identificador de Arquivo",language:"Idioma de Metadados",hierarchyLevel:"Nível de Hierarquia",hierarchyLevelName:"Nome do Nível de Hierarquia",contact:"Contato de Metadados",dateStamp:"Metadados",metadataStandardName:"Nome Padrão de Metadados",metadataStandardVersion:"Versão Padrão de Metadados",referenceSystemInfo:"Sistema de Referência",identificationInfo:"Identificação",distributionInfo:"Distribuição",dataQualityInfo:"Qualidade"},MD_ProgressCode:{caption:"Código de Processamento",completed:"Finalizado",historicalArchive:"Arquivo Histórico",obsolete:"Obsoleto",onGoing:"Em andamento",planned:"Planejado",required:"Obrigatório",underDevelopment:"Sob Desenvolvimento"},MD_RepresentativeFraction:{denominator:"Denominador"},MD_Resolution:{equivalentScale:"Escala Equivalente",distance:"Distância"},MD_RestrictionCode:{copyright:"Direitos autorais",patent:"Patente",patentPending:"Patente Pendente",trademark:"Marca Registrada",license:"Licença",intellectualPropertyRights:"Direitos de Propriedade Intelectual",restricted:"Restrito",otherRestrictions:"Outras Restrições"},MD_ScopeCode:{attribute:"Atributo",attributeType:"Tipo de atributo",collectionHardware:"Hardware de coleção",collectionSession:"Sessão de coleção",dataset:"Conjunto de Dados",series:"Série",nonGeographicDataset:"Conjunto de dados não geográficos",dimensionGroup:"Grupo de dimensão",feature:"Módulos",featureType:"Tipo de Feição",propertyType:"Tipo de Propriedade",fieldSession:"Sessão do campo",software:"Software",service:"Serviço",model:"Modelo",tile:"Mosaico"},MD_ScopeDescription:{attributes:"Atributos",features:"Feições",featureInstances:"Instâncias da Feição",attributeInstances:"Instâncias do Atributo",dataset:"Conjunto de Dados",other:"Outro"},MD_SecurityConstraints:{caption:"Restrições de Segurança",classification:"Classificação",userNote:"Anotação de Usuário",classificationSystem:"Sistema de Classificação",handlingDescription:"Descrição de Manuseio"},MD_SpatialRepresentationTypeCode:{caption:"Tipo de Representação Espacial",vector:"Vetor",grid:"Grade",textTable:"Tabela de Texto",tin:"TIN",stereoModel:"Modelo Estéreo",video:"Vídeo"},MD_TopicCategoryCode:{caption:"Categorias do Tópico",boundaries:"Administrativo e Limite Político",farming:"Agricultura e Pecuária",climatologyMeteorologyAtmosphere:"Atmosfera e Climática",biota:"Biologia e Ecologia",economy:"Negócios e Economia",planningCadastre:"Cadastral",society:"Cultural, Sociedade e Demografia",elevation:"Elevação e Produtos Derivados",environment:"Ambiente e Conservação",structure:"Instalações e Estruturas",geoscientificInformation:"Geológico e Geofísico",health:"Saúde Humana e Doenças",imageryBaseMapsEarthCover:"Imagens e Mapas Base",inlandWaters:"Recursos Hídricos Nacionais",location:"Local e Redes Geodésicas",intelligenceMilitary:"Militar",oceans:"Oceanos e Estuários",transportation:"Redes de Transporte",utilitiesCommunication:"Utilitários e Comunicação"},MI_ContextCode:{caption:"Contexto",acquisition:"Aquisição",pass:"Aprovar",wayPoint:"Ponto Intermediário"},MI_EnvironmentalRecord:{caption:"Condições Ambientais",averageAirTemperature:"Temperatura Média do Ar",maxRelativeHumidity:"Umidade Relativa Máxima",maxAltitude:"Altitude Máxima",meterologicalConditions:"Condições Metereológicas"},MI_Event:{identifier:"Identificador de Evento",time:"Tempo",expectedObjectiveReference:"Objetivo Esperado (Identificador de Objeto)",relatedSensorReference:"Sensor Relacionado (Identificador de Instrumento)",relatedPassReference:"Passagem Relacionada (Identificador de Passagem da Plataforma)"},MI_GeometryTypeCode:{point:"Ponto",linear:"Linear",areal:"Aéreo",strip:"Tira"},MI_Instrument:{citation:"Citação do Instrumento",identifier:"Identificador de Instrumento",sType:"Tipo de Instrumento",description:"Descrição de Instrumento",mountedOn:"Montado Em",mountedOnPlatformReference:"Montado Em (Identificador de Plataforma)"},MI_Metadata:{acquisitionInformation:"Aquisição"},MI_Objective:{caption:"Objetivo",identifier:"Identificador de Objeto",priority:"Prioridade de Destino",sFunction:"Função do Objetivo",extent:"Extensão",pass:"Passagem da Plataforma",sensingInstrumentReference:"Instrumento de Sensoriamento (Identificador de Instrumento)",objectiveOccurrence:"Eventos",sections:{identification:"Identificação",extent:"Extensão",pass:"Aprovar",sensingInstrument:"Instrumento de Sensoriamento",objectiveOccurrence:"Eventos"}},MI_ObjectiveTypeCode:{caption:"Tipo (Técnica de Coleta para Objeto)",instantaneousCollection:"Coleta Instantânea",persistentView:"Visualização Persistente",survey:"Pesquisa"},MI_Operation:{caption:"Operação",description:"Descrição da Operação",citation:"Citação da Operação",identifier:"Identificador de Operação",status:"Status da Operação",objectiveReference:"Objeto Relacionado (Identificador de Objeto)",planReference:"Plano Relacionado (Identificador de Plano)",significantEventReference:"Evento Relacionado (Identificador de Evento)",platformReference:"Plataforma Relacionada (Identificador de Plataforma)",sections:{identification:"Identificação",related:"Relacionado"}},MI_OperationTypeCode:{caption:"Tipo de Operação",real:"Real",simulated:"Simulado",synthesized:"Sintetizado"},MI_Plan:{sType:"Geometria de Amostragem para Coletar Dados",status:"Status do Plano",citation:"Citação de Criação do Pedido de Coleta",satisfiedRequirementReference:"Requisito Atendido (Identificador de Requisito)",operationReference:"Operação Relacionada (Identificador de Operação)"},MI_Platform:{citation:"Citação da Plataforma",identifier:"Identificador de Plataforma",description:"Descrição da Plataforma de Suporte do Instrumento",sponsor:"Organização do Patrocinador para Plataforma",instrument:"Instrumentos montados na plataforma",instrumentReference:"Identificador de Instrumento",sections:{identification:"Identificação",sponsor:"Patrocinador",instruments:"Instrumentos"}},MI_PlatformPass:{identifier:"Identificador de Passagem da Plataforma",extent:"Extensão de Passagem da Plataforma",relatedEventReference:"Evento Relacionado (Identificador de Evento)"},MI_PriorityCode:{critical:"Crítico",highImportance:"Importância Alta",mediumImportance:"Importância Média",lowImportance:"Importância Baixa"},MI_RequestedDate:{requestedDateOfCollection:"Data de Coleta Solicitada",latestAcceptableDate:"Última Data Aceitável"},MI_Requirement:{caption:"Requisitos",citation:"Citação para Material de Guia do Requisito",identifier:"Identificador de Requisito",requestor:"Solicitante do Requisito",recipient:"Destinatário de Resultados do Requisito",priority:"Prioridade de Requisito",requestedDate:"Data Solicitada",expiryDate:"Data de Expiração",satisifiedPlanReference:"Plano Atendido (Identificador de Plano)",sections:{identification:"Identificação",requestor:"Solicitante",recipient:"Destinatário",priorityAndDates:"Prioridade e Datas",satisifiedPlan:"Plano Atendido"}},MI_SequenceCode:{caption:"Sequência",start:"Inicial",end:"Final",instantaneous:"Instantâneo"},MI_TriggerCode:{caption:"Disparador",automatic:"Automático",manual:"Manual",preProgrammed:"Pré-programado"},ObjectReference:{uuidref:"Referência UUID",xlinkref:"Referência URL"},RS_Identifier:{caption:"Espaço de Código Adicional de ID",code:"Código",codeSpace:"Espaço de Código"},SV_CouplingType:{loose:"Livre",mixed:"Misto",tight:"Limitado"},SV_OperationMetadata:{operationName:"Nome da Operação",DCP:"DCP",connectPoint:"Conectar Pontos"},SV_ServiceIdentification:{serviceType:"ServiceType",couplingType:"Tipo de Associação",containsOperations:"Metadados da Operação",operatesOn:"Opera Em"},TM_Primitive:{indeterminatePosition:"Posição Indeterminada",indeterminates:{before:"Antes",after:"Depois",now:"Agora",unknown:"Desconhecido"}},gemet:{concept:{gemetConceptKeyword:"Palavra-Chave de Conceito do GEMET",tool:"Observar...",dialogTitle:"GEMET - Palavra-Chave de Conceito",searchLabel:"Pesquisar:",searchTip:"Pesquisa de GEMET"},theme:{tool:"Observar...",dialogTitle:"GEMET - Tema de Dados do Inspire"},ioerror:"Ocorreu um erro de comunicação com o serviço de GEMET: {url}",searching:"Pesquisando GEMET...",noMatch:"Nenhum mapeamento correspondente foi encontrado.",languages:{bg:"Búlgaro",cs:"Tcheco",da:"Dinamarquês",nl:"Holandês",en:"Inglês",et:"Estônia",fi:"Finlandês",fr:"Francês",de:"Alemão",el:"Grego",hu:"Húngaro",ga:"Gaélico (Irlandês)",it:"Italiano",lv:"Letônia",lt:"Lituano",mt:"Maltês",pl:"Polonês",pt:"Português",ro:"Romano",sk:"Eslovaco",sl:"Esloveno",es:"Espanhol",sv:"Sueco"}}});