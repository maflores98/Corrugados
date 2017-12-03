/*
Navicat MySQL Data Transfer

Source Server         : coatitla
Source Server Version : 100128
Source Host           : localhost:3306
Source Database       : coatitla

Target Server Type    : MYSQL
Target Server Version : 100128
File Encoding         : 65001

Date: 2017-11-28 20:58:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articulos
-- ----------------------------
DROP TABLE IF EXISTS `articulos`;
CREATE TABLE `articulos` (
  `id_articulo` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_articulo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of articulos
-- ----------------------------
INSERT INTO `articulos` VALUES ('1', 'CAJAS CON IMPRESION', '1');
INSERT INTO `articulos` VALUES ('2', 'CAJAS SIN IMPRESION', '1');
INSERT INTO `articulos` VALUES ('3', 'MAQUILA', '1');

-- ----------------------------
-- Table structure for captura_procesos
-- ----------------------------
DROP TABLE IF EXISTS `captura_procesos`;
CREATE TABLE `captura_procesos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `nombre_trabajo` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_maquina` int(11) DEFAULT NULL,
  `nombre_maquina` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_proceso` int(11) DEFAULT NULL,
  `nombre_proceso` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_operador` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `nombre_operador` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `cant_requerida` int(11) DEFAULT NULL,
  `fechahora_registro` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `fechahora_inicio` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of captura_procesos
-- ----------------------------

-- ----------------------------
-- Table structure for categorias_materiales
-- ----------------------------
DROP TABLE IF EXISTS `categorias_materiales`;
CREATE TABLE `categorias_materiales` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` char(30) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of categorias_materiales
-- ----------------------------
INSERT INTO `categorias_materiales` VALUES ('0', 'CAJAS', '1');
INSERT INTO `categorias_materiales` VALUES ('1', 'HOJAS', '1');
INSERT INTO `categorias_materiales` VALUES ('2', 'CITO', '1');
INSERT INTO `categorias_materiales` VALUES ('3', 'HULES', '1');
INSERT INTO `categorias_materiales` VALUES ('4', 'LIMPIEZA', '1');
INSERT INTO `categorias_materiales` VALUES ('5', 'PAPELERIA', '1');
INSERT INTO `categorias_materiales` VALUES ('6', 'REFACCIONES', '1');
INSERT INTO `categorias_materiales` VALUES ('7', 'TINTAS', '1');
INSERT INTO `categorias_materiales` VALUES ('8', 'ADHESIVOS', '1');

-- ----------------------------
-- Table structure for categorias_personas
-- ----------------------------
DROP TABLE IF EXISTS `categorias_personas`;
CREATE TABLE `categorias_personas` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` char(30) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of categorias_personas
-- ----------------------------

-- ----------------------------
-- Table structure for clientes
-- ----------------------------
DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `rcomercial` char(50) NOT NULL,
  `rsocial` char(50) DEFAULT NULL,
  `rfc` char(13) DEFAULT NULL,
  `telefono` decimal(18,0) DEFAULT NULL,
  `pagweb` char(50) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  `condpago` char(40) DEFAULT NULL,
  `diasrevision` char(30) DEFAULT NULL,
  `contacto1` char(40) NOT NULL,
  `mailcont1` char(40) DEFAULT NULL,
  `refcont1` char(20) DEFAULT NULL,
  `contacto2` char(40) DEFAULT NULL,
  `mailcont2` char(40) DEFAULT NULL,
  `refcont2` char(20) DEFAULT NULL,
  `contacto3` char(40) DEFAULT NULL,
  `mailcont3` char(40) DEFAULT NULL,
  `refcont3` char(20) DEFAULT NULL,
  `id_vendedor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of clientes
-- ----------------------------
INSERT INTO `clientes` VALUES ('1', 'CORPORACION IMPRESORA SA DE CV', 'CORPORACION IMPRESORA SA DE CV', 'CIM820422E30', '53665100', '', null, '1', '', '0', 'VICTORINO VERGARA', 'facturaelectronica@cisacv.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('2', 'LAMINACIONES Y EMPAQUES SA DE CV', 'LAMINACIONES Y EMPAQUES SA DE CV', 'LEM850906G75', '5690', '', null, '1', '', '0', '', 'mmillan@lamypak.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('3', 'ROCE EMPAQUES DE CARTON PAPELERIA Y REGALOS SA DE', 'ROCE EMPAQUES DE CARTON PAPELERIA Y REGALOS SA DE', 'REC971021IKA', null, '', null, '1', '', '0', '', 'angelica@roceempaques.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('4', 'MAQUICART EFICIENCIA SA DE CV', 'MAQUICART EFICIENCIA SA DE CV', 'MEF100421D17', '56998492', '', null, '1', '', '0', '', 'mcart10@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('5', 'IMPRESORA COYOACAN SA DE CV', 'IMPRESORA COYOACAN SA DE CV', 'ICO580905HW7', '50626122', '', null, '1', '', '0', '', 'sergio.gonzalez@icoyo.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('6', 'IMPRESORA LEOVER, SA DE CV', 'IMPRESORA LEOVER, SA DE CV', 'ILE8509113Q3', '52346110', '', null, '1', '', '0', '', 'ventas@leover.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('7', 'IMPRESOS FLORIDA SA DE CV', 'IMPRESOS FLORIDA SA DE CV', 'IFL870318T32', '53943121', '', null, '1', '', '0', '', 'cuentasporpagar@impresosflorida.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('8', 'TERMINADOS LITOGRAFICOS, SA DE CV', 'TERMINADOS LITOGRAFICOS, SA DE CV', 'TLI9809183U3', null, '', null, '1', '', '0', '', 'cesisegundo@litogil.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('9', 'EMPAQUES TERMOFORMADOS DEL VALLE SA', 'EMPAQUES TERMOFORMADOS DEL VALLE SA', 'ETV061010TF6', null, '', null, '1', '', '0', '', 'etvalle@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('10', 'MARIA DE LOURDES LARA VARGAS', 'MARIA DE LOURDES LARA VARGAS', 'LAVL580430R28', null, '', null, '1', '', '0', '', 'cajasplegadizaslara@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('11', 'MARTHA ARCELIA SAENZ QUIROZ', 'MARTHA ARCELIA SAENZ QUIROZ', 'SAQM640828637', null, '', null, '1', '', '0', '', 'genarotd@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('12', 'G&C PRINTING SOLUTIONS SA DE CV', 'G&C PRINTING SOLUTIONS SA DE CV', 'GAC040310FG1', '57559466', '', null, '1', '', '0', '', 'cdiaz.gc@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('13', 'IMPRENTA REYES HERMANOS SA DE CV', 'IMPRENTA REYES HERMANOS SA DE CV', 'IRH830121BB7', '5010', '', null, '1', '', '0', '', 'fact.elect@irh.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('14', 'PROBELCO SA DE CV', 'PROBELCO SA DE CV', 'PRO860701656', null, '', null, '1', '', '0', '', 'lrivera@suajesviveros.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('15', 'GRUPO WELVAART SA DE CV', 'GRUPO WELVAART SA DE CV', 'GWE120717310', null, '', null, '1', '', '0', '', 'grupo_welvaart@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('16', 'STYLE PRINT SA DE CV', 'STYLE PRINT SA DE CV', 'SPR020528134', null, '', null, '1', '', '0', '', 'mcabrera@styleprint.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('17', 'ROCHA HERNANDEZ LUIS ANGEL', 'ROCHA HERNANDEZ LUIS ANGEL', 'ROHL601001CW4', null, '', null, '1', '', '0', '', 'exhibi-herro-drag@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('18', 'ALGARA SA DE CV', 'ALGARA SA DE CV', 'ALG670404QE3', null, '', null, '1', '', '0', '', 'ffranco@mialegria.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('19', 'EXEL SERVI GRAFICA SA DE CV', 'EXEL SERVI GRAFICA SA DE CV', 'ESG830531N6A', '50891000', '', null, '1', '', '0', '', 'proveedores@exelsg.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('20', 'TOVAR DAVILA JUAN GUSTAVO', 'TOVAR DAVILA JUAN GUSTAVO', 'TODJ690623JL3', null, '', null, '1', '', '0', '', 'litograficasf@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('21', 'IMPRENTA RICHI SA', 'IMPRENTA RICHI SA', 'IRI700919M18', '53966130', '', null, '1', '', '0', '', 'nbarcenas@imprentarichi.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('22', 'RAYMUNDO LEOPOLDO TOVAR DAVILA', 'RAYMUNDO LEOPOLDO TOVAR DAVILA', 'TODR660529856', '59315597', '', null, '1', '', '0', '', 'litograficasf@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('23', 'LITOGRAFIA GIL SA DE CV', 'LITOGRAFIA GIL SA DE CV', 'LGI661107M86', '5273', '', null, '1', '', '0', '', 'cecisegundo@litogil.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('24', 'LITOGRAFICA PUAN SA DE CV', 'LITOGRAFICA PUAN SA DE CV', 'LPU990623D56', '56978081', '', null, '1', '', '0', '', 'facturasproveedores@litograficapuan.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('25', 'BLAZQUEZ RODRIGUEZ HECTOR HUGO', 'BLAZQUEZ RODRIGUEZ HECTOR HUGO', 'BARH590228LE9', null, '', null, '1', '', '0', '', 'vihumasicompras@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('26', 'FOTORAMA DE MEXICO,  SA DE CV', 'FOTORAMA DE MEXICO,  SA DE CV', 'FME860128GR5', null, '', null, '1', '', '0', '', 'lrivera@suajesviveros.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('27', 'GRUPO BRILLIANT DE MEXICO SA DE CV', 'GRUPO BRILLIANT DE MEXICO SA DE CV', 'GBM0307166P9', '85027788', '', null, '1', '', '0', '', 'contacto@brilliant.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('28', 'LITO SERVICIOS SA DE CV', 'LITO SERVICIOS SA DE CV', 'LSE960213IN2', null, '', null, '1', '', '0', '', 'pilar.morales@litoservicios.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('29', 'KEYSON DE MEXICO SA DE CV', 'KEYSON DE MEXICO SA DE CV', 'KME930315BL5', null, '', null, '1', '', '0', '', 'keyson.mexico@keyson.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('30', 'CORPORACION ALROGO SA DE CV', 'CORPORACION ALROGO SA DE CV', 'CAL980817FD1', null, '', null, '1', '', '0', '', 'facturaelectronica@cisacv.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('31', 'IMPRESOS LITOPOLIS,  SA DE CV', 'IMPRESOS LITOPOLIS,  SA DE CV', 'ILI960207P76', null, '', null, '1', '', '0', '', 'igutierrez@litopolis.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('32', 'EDELMANN PACKAGING MEXICO, SA DE CV', 'EDELMANN PACKAGING MEXICO, SA DE CV', 'EPM040318J5A', '55822511', '', null, '1', '', '0', '', 'proveedores@edelmann.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('33', 'LITOPROCESS, SA DE CV', 'LITOPROCESS, SA DE CV', 'LIT8310303I3', '21225600', '', null, '1', '', '0', '', 'contabilidad@litoprocess.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('34', 'TOVAR LARA FRANCISCO', 'TOVAR LARA FRANCISCO', 'TOLF8109036K1', null, '', null, '1', '', '0', '', 'cajasplegadizaslara@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('35', 'TOVAR LARA CARLOS', 'TOVAR LARA CARLOS', 'TOLC840429JN2', null, '', null, '1', '', '0', '', 'cajasplegadizaslara@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('36', 'TOVAR GOMEZ ELSA  ALEJANDRA', 'TOVAR GOMEZ ELSA ALEJANDRA', 'TOGE880219PU7', null, '', null, '1', '', '0', '', 'litograficasf@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('37', 'POLIDEX S.A. DE C.V.', 'POLIDEX S.A. DE C.V.', 'POL8909295R2', null, '', null, '1', '', '0', '', 'comprobantes.fiscales@polidex.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('38', 'FARMACOS CONTINENTALES, S.A. DE C.V.', 'FARMACOS CONTINENTALES, S.A. DE C.V.', 'FCO750929NM5', '6379886163798855', '', null, '1', '', '0', '', 'contabilidad@farmacoscontinentales.com.m', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('39', 'CURSO S.C.', 'CURSO S.C.', 'CUR9508169Q4', null, '', null, '1', '', '0', '', 'costos@fijatec.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('40', 'SIEMPRE CUIDANDOTE S.A. DE C.V.', 'SIEMPRE CUIDANDOTE S.A. DE C.V.', 'SCU0909042I8', null, '', null, '1', '', '0', '', 'naturalcolour@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('41', 'NATURALMENTE DISTRIBUCIONES S.A. DE C.V.', 'NATURALMENTE DISTRIBUCIONES S.A. DE C.V.', 'NDI031028EW4', null, '', null, '1', '', '0', '', 'gabrielmoralesvargas@yahoo.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('42', 'CONSUTURA MEXICANA SA DE CV', 'CONSUTURA MEXICANA SA DE CV', 'CME090727457', '58379757', '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('43', 'SCHWAN - STABILO CREATIVE COLORS DE MEXICO S.A. DE', 'SCHWAN - STABILO CREATIVE COLORS DE MEXICO S.A. DE', 'SGS070820HN1', '2062', '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('44', 'LITOGRIMANN SA DE CV', 'LITOGRIMANN SA DE CV', 'LIT6108231N7', '47448800', '', null, '1', '', '0', '', 'facturas@invekra.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('45', 'SALVADOR ANTONIO FLORES CABELLO', 'SALVADOR ANTONIO FLORES CABELLO', 'FOCS800923LK9', null, '', null, '1', '', '0', '', 'cyc.ventas1@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('46', 'FER - NET PRODUCCIONES SA DE CV', 'FER - NET PRODUCCIONES SA DE CV', 'FPR100422SI7', null, '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('47', 'PRODUCTOS MEDICOS  Y HOSPITALARIOS SA DE CV', 'PRODUCTOS MEDICOS  Y HOSPITALARIOS SA DE CV', 'PMH880317137', null, '', null, '1', '', '0', '', 'compras@pmhsa.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('48', 'GLOBAL MARKETING SYSTEM MEXICO SA DE CV', 'GLOBAL MARKETING SYSTEM MEXICO SA DE CV', 'GMS050817G52', null, '', null, '1', '', '0', '', 'csalcedo@gmsm.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('49', 'GRUPO LITHOGRAFICO PREMIER SA DE CV', 'GRUPO LITHOGRAFICO PREMIER SA DE CV', 'GLP120409MW5', null, '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('50', 'PLATIMPRESS SA DE CV', 'PLATIMPRESS SA DE CV', 'PLA0808268W4', null, '', null, '1', '', '0', '', 'salvador@platim.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('51', 'SERVICIOS CORPORATIVOS PRINT NOW SA DE CV', 'SERVICIOS CORPORATIVOS PRINT NOW SA DE CV', 'SCP110826ESA', null, '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('52', 'NOVELTY PRINTEC,SA DE CV', 'NOVELTY PRINTEC, SA DE CV', 'NPR131217957', null, '', null, '1', '', '0', '', 'veronica.arroyo@noveltyprintec.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('53', 'INDUSTRIAS BLE, SA DE CV', 'INDUSTRIAS BLE, SA DE CV', 'CES101001M19', '62', '', null, '1', '', '0', '', 'suc2701@esperanza.mx', '', 'SILVIA DIAZ', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('54', 'COLOUR PRINTING PACK, SA DE CV', 'COLOUR PRINTING PACK, SA DE CV', 'CPP101215S17', '5534733041', '', null, '1', '', '0', 'JESUS LOYOLA', 'jloyola@colourpack.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('55', 'CANTU SALAS  RODRIGO', 'CANTU SALAS   RODRIGO', 'CASR900609SN5', null, '', null, '1', '', '0', '', 'casaengraving@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('56', 'VICTOR HUGO CABALLERO CRUZALEY', 'VICTOR HUGO CABALLERO CRUZALEY', 'CACV720719GVA', null, '', null, '1', '', '0', '', 'dolores.valdez@jirehpublicidad.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('57', 'ARVATO DE MEXICO, SA DE CV', 'ARVATO DE MEXICO, SA DE CV', 'AME8612015S0', '53428000', '', null, '1', '', '0', '', 'invoice@edxinbox.com', '', '', 'job.merales@arvato.com.mx', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('58', 'HERNANDEZ SEDANO AGUSTIN SEDANO', 'HERNANDEZ SEDANO AGUSTIN SEDANO', 'HESA62052852A', null, '', null, '1', '', '0', '', 'lalos_9@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('59', 'VILLALOBOS ZEPEDA SALVADOR ALEJANDRO', 'VILLALOBOS ZEPEDA SALVADOR ALEJANDRO', 'VIZS710530AU3', null, '', null, '1', '', '0', '', 'cesar@ampublicidad.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('60', 'SUAJES VIVEROS HERMANOS, SA DE CV', 'SUAJES VIVEROS HERMANOS, SA DE CV', 'SVH1101279H1', '57', '', null, '1', '', '0', '', 'eaguirre@suajesviveros.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('61', 'IMPRESOS MUÑIZ  S DE RL DE CV', 'IMPRESOS MUÑIZ  S DE RL DE CV', 'IMU090520AA8', '55799120', '', null, '1', '', '0', '', 'hectormunizram@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('62', 'CROWN BACCARA DE MEXICO, SA DE CV', 'CROWN BACCARA DE MEXICO, SA DE CV', 'CBM000829U53', '55419', '', null, '1', '', '0', '', 'ricardoflores@crownbaccara.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('63', 'TERMOFORMADOS  ARIES, SA DE CV', 'TERMOFORMADOS ARIES,  SA DE CV', 'TAR130814NE0', '58304230', '', null, '1', '', '0', '', 'etvalle@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('64', 'SMURFIT CARTON Y PAPEL DE MEXICO, SA DE CV', 'SMURFIT CARTON Y PAPEL DE MEXICO, SA DE CV', 'SCP900125TT8', null, '', null, '1', '', '0', '', 'sergio.hernandez@smurfitkappa.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('65', 'PAPELERA TORREFUERTE, SA DE CV', 'PAPELERA TORREFUERTE, SA DE CV', 'PTO07052356A', null, '', null, '1', '', '0', '', 'liz.alfayomega@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('66', 'GRUPO INTEGRADOR GRÁFICO 33 SA DE CV', 'GRUPO  INTEGRADOR GRÁFICO 33 SA DE CV', 'GIT140619MX7', null, '', null, '1', '', '0', '', 'maria.grupo33@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('67', 'BURO DE SERVICIOS DECADA, SA DE CV', 'BURO DE SERVICIOS DECADA, SA DE CV', 'BSD050317827', null, '', null, '1', '', '0', '', 'grupo.alpunto@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('68', 'CASASOLA ORTIZ MARIO  ENRIQUE', 'CASASOLA ORTIZ MARIO  ENRIQUE', 'CAOM750912CH1', null, '', null, '1', '', '0', '', 'facturas@casasola.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('69', 'HERPONS CONTINENTAL, SA DE CV', 'HERPONS CONTINENTAL, SA DE CV', 'HCO970303DM3', '5567', '', null, '1', '', '0', '', 'choraa@litoplas.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('70', 'CORPORATIVO DE NEGOCIOS ANMAEN SAPI DE CV', 'CORPORATIVO DE NEGOCIOS ANMAEN SAPI DE CV', 'CNA140703C7A', '222', '', null, '1', '', '0', 'JESUS NOLASCO', 'jnolasco@amga.mx', '', 'LNI MA. LUISA ESTUDILLO MARTINEZ', 'direccion@mermaids123.com', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('71', 'CARTOEMPAQUES IMPRESOS DE MEXICO, SA  DE CV', 'CARTOEMPAQUES IMPRESOS DE MEXICO, SA  DE CV', 'CIM071127VE2', '3000', '', null, '1', '', '0', '', 'Facturacion@cimmex.com.mx', '', 'NATALIE CERQUEDA', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('72', 'OPERADORA OMX, SA DE CV', 'OPERADORA OMX, SA DE CV', 'OOM960429832', '5536', '', null, '1', '', '0', '', 'admon@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('73', 'FACTOR PUNTO  DE COMUNICACION, SA DE CV', 'FACTOR PUNTO  DE COMUNICACION, SA DE CV', 'FPC120229J89', '35', '', null, '1', '', '0', '', 'eduardo@factorpuntocom.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('74', 'DISEÑO Y SOLUCION  INTEGRAL SANTILLAN RAMIREZ, SA', 'DISEÑO Y SOLUCION  INTEGRAL SANTILLAN RAMIREZ, SA', 'DSI070403LG8', '6650', '', null, '1', '', '0', '', 'compras@soluempack.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('75', 'DISTRIBUIDORA DE PRODUCTOS SUSTENTABLES DE CARTON', 'DISTRIBUIDORA DE PRODUCTOS SUSTENTABLES DE CARTON', 'DPS081110941', '22371270', '', null, '1', '', '0', '', 'compras@crearton.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('76', 'INDUSTRIA  GRAFICA  LOMA CAPITAL, SA DE CV', 'INDUSTRIA  GRAFICA  LOMA CAPITAL, SA DE CV', 'IGL140929KB3', null, '', null, '1', '', '0', '', 'pnavarro@inw.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('77', 'LITOGAP, S DE RL DE CV', 'LITOGAP, S DE RL DE CV', 'LIT061220B95', '55411733', '', null, '1', '', '0', '', 'cxp@litogap.com.mx,leon.solis@litogap.co', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('78', 'MEJIA GOMEZ JOSE RICARDO', 'MEJIA GOMEZ JOSE RICARDO', 'MEGR810802Q14', '6282', '', null, '1', '', '0', '', 'rmejia@folding.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('79', 'INTERNATIONAL BUSINESS SOLUTION DE MEXICO, SA DE C', 'INTERNATIONAL BUSINESS SOLUTION DE MEXICO, SA DE C', 'IBS970801P19', '53191982', '', null, '1', '', '0', '', 'ctaspxpagaribsmex@ibsmexico.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('80', 'IMPRESIONES CHERAL, SA DE CV', 'IMPRESIONES CHERAL, SA DE CV', 'ICE021007631', '55671457', '', null, '1', '', '0', '', 'cheral1971@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('81', 'WINTERBORNE INCORPORATED DE MEXICO, SA DE CV', 'WINTERBORNE INCORPORATED DE MEXICO, SA DE CV', 'WIM070703M38', null, '', null, '1', '', '0', '', 'lhernandez@winterborne.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('82', 'CORRUGADOS Y EMPAQUES COLON, SA DE CV', 'CORRUGADOS Y EMPAQUES COLON, SA DE CV', 'CEC1408295A9', '60665341', '', null, '1', '', '0', '', 'esanpedro@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('83', 'YSA MEXICANA, SA DE CV', 'YSA MEXICANA, SA DE CV', 'YME7707061N1', '55983366', '', null, '1', '', '0', '', 'fabricakatie@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('84', 'ROBLEDO OCHOA LILIA', 'ROBLEDO OCHOA LILIA', 'ROOL601204SX4', null, '', null, '1', '', '0', '', 'l.robledo@live.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('85', 'GALAS DE MEXICO, SA DE CV', 'GALAS DE MEXICO, SA DE CV', 'GME840821DP8', '5134', '', null, '1', '', '0', '', 'arivera@galas.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('86', 'GEYSSON MEXICANA, SA DE CV', 'GEYSSON MEXICANA, SA DE CV', 'GME980730EZ4', '55386966', '', null, '1', '', '0', '', 'geyssonmexicana@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('87', 'PELICULAS UTILES, SA DE CV', 'PELICULAS UTILES,  SA DE CV', 'PUT9612194Q5', null, '', null, '1', '', '0', '', 'miriam.reyes@peliculasutiles.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('88', 'GONCALVES DE MEXICO,S DE RL DE CV', 'GONCALVES DE MEXICO,S DE RL DE CV', 'GME0509285X2', '5899', '', null, '1', '', '0', '', 'revision@goncalves.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('89', 'INDUSTRIAS PEAR, SA DE CV', 'INDUSTRIAS PEAR, SA DE CV', 'IPE8908219D4', '53', '', null, '1', '', '0', '', 'luz.ramirez@industrias-pear.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('90', 'JABONERA LA ESPUMA, SA DE CV', 'JABONERA LA ESPUMA, SA DE CV', 'JES851114TY4', '17151169025', '', null, '1', '', '0', '', 'facturas@jaboneralaespuma.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('91', 'ZEBRA BINDING SYSTEM,SA DE CV', 'ZEBRA  BINDING SYSTEM, SA DE CV', 'ZBS0211125M5', '5751', '', null, '1', '', '0', '', 'finanzas@zebrabindig.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('92', 'PAHERNA, IMPRENTA & OFFSET, SA DE CV', 'PAHERNA, IMPRENTA & OFFSET, SA DE CV', 'PIA080806FL6', '57', '', null, '1', '', '0', '', 'paherna1@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('93', 'TONAL, SA DE CV', 'TONAL, SA DE CV', 'TON990610AJ9', '53', '', null, '1', '', '0', '', 'facturatonal@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('94', 'IMPRESOS  MIJANGOS, SA DE CV', 'IMPRESOS  MIJANGOS, SA DE CV', 'IMI120228CA0', '15', '', null, '1', '', '0', '', 'mmijangos@yahoo.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('95', 'IMPRESOS Y PAPELERIA MEXICANOS, SA', 'IMPRESOS Y PAPELERIA MEXICANOS, SA', 'IPM780120MU0', '57811562', '', null, '1', '', '0', '', 'impamex@impamex.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('96', 'ERCUS, SA DE CV', 'ERCUS, SA DE CV', 'ERC100108VE6', '4455', '', null, '1', '', '0', '', 'smontano@grupoercus.com', '', 'YADIRA CHAGOYA', 'yadira-72@hotmail.com', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('97', 'CONSTELACION 21, SA DE CV', 'CONSTELACION 21, SA DE CV', 'CON1509012Z5', '57', '', null, '1', '', '0', '', 'hernandez@suich.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('98', 'MIRANDA MALAGON PABLO', 'MIRANDA MALAGON PABLO', 'MIMP770704NU8', '2222327014', '', null, '1', '', '0', '', 'pmiranda.77@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('99', 'IMPRIMART, SA DE CV', 'IMPRIMART, SA DE CV', 'IMP070802CE0', '21221060', '', null, '1', '', '0', '', 'cxp@litoprocess.com,jcarrillo@imprimart.', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('100', 'ISOVOLTA DE MEXICO, SA DE CV', 'ISOVOLTA DE MEXICO, SA DE CV', 'IME990527NG7', '58996889', '', null, '1', '', '0', 'DIEGO MORALES', 'diego.morales@isovolta.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('101', 'TECNOLOGIA EN HELADOS,SA DE CV', 'TECNOLOGIA EN HELADOS,SA DE CV', 'THE100118346', '5273', '', null, '1', '', '0', '', 'lrivera@suajesviveros.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('102', 'COREMPAQUES, SA DE CV', 'COREMPAQUES, SA DE CV', 'COR130214AY7', '5699', '', null, '1', '', '0', 'GUSTAVO CARBAJAL', 'gcarbajal.core@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('103', 'STERN INGREDIENTS, SA DE CV', 'STERN INGREDIENTS,  SA DE CV', 'SIN070409C50', '53181216', '', null, '1', '', '0', '', 'cfdistern@safedata.com.mx;ggonzalez@ster', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('104', 'HUHTAMAKI MEXICANA SA DE CV', 'HUHTAMAKI MEXICANA SA DE CV', 'HME970102CF3', '58987000', '', null, '1', '', '0', '', 'facturas.huhtamaki@fuerza-ventas.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('105', 'MACAL AVENDAÑO CARLOS FERNANDO', 'MACAL AVENDAÑO CARLOS FERNANDO', 'MAAC660506PQ0', null, '', null, '1', '', '0', '', 'carlosmacal@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('106', 'TECHNO  SERVER DE MEXICO, SA DE CV', 'TECHNO  SERVER DE MEXICO, SA DE CV', 'TSM060328FN5', '36269401', '', null, '1', '', '0', '', 'info@technoserver.com.mx, asanchez@techn', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('107', 'KOLOR MATS PUBLICIDAD, SA DE CV', 'KOLOR MATS PUBLICIDAD, SA DE CV', 'KMP020823J68', '55160880', '', null, '1', '', '0', '', 'compras@kolormats.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('108', 'GRUPO IMPRESOR SINERGIA SA DE CV', 'GRUPO IMPRESOR SINERGIA SA DE CV', 'GIS000522QD4', null, '', null, '1', '', '0', '', 'contacto.produccion@gisinergia.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('109', 'GAMAGRAF IMPRESORES SA DE CV', 'GAMAGRAF IMPRESORES SA DE CV', 'GIM9001196Z0', null, '', null, '1', '', '0', '', 'avila@litogap.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('110', 'DISTRIBUIDORA INDUSTRIAL MEXICANA SA', 'DISTRIBUIDORA INDUSTRIAL MEXICANA SA', 'DIM8402284X5', null, '', null, '1', '', '0', '', 'ivonne.sepulveda@dim-sa.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('111', 'ALLEN LABORATORIOS SA DE CV', 'ALLEN LABORATORIOS SA DE CV', 'ALA860401IN8', '536860585567', '', null, '1', '', '0', '', 'COMPRAS@ALLEN.COM.MX', '', 'ELIZABETH ZAMORA', 'compras@allen.com.mx', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('112', 'EL OSO SA DE CV', 'EL OSO SA DE CV', 'OSO850521EDA', '9183', '', null, '1', '', '0', '', 'alejandro.rosales@el-oso.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('113', 'SURTIDORA GRAFICA, SA DE CV', 'SURTIDORA  GRAFICA, SA DE CV', 'SGR840109PR8', null, '', null, '1', '', '0', '', 'ecastro@surtigraf.com\'; \'acastillo@surti', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('114', 'GUERRERO  JOYNER SANDRA  LUZ', 'GUERRERO  JOYNER SANDRA  LUZ', 'GUJS770328B74', null, '', null, '1', '', '0', '', 'lrivera@suajesviveros.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('115', 'EB IMPRESORES SA DE CV', 'EB IMPRESORES SA DE CV', 'EIM7910047Y4', '53681558', '', null, '1', '', '0', '', 'facturacion@ebimp.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('116', 'TECHNI SEARCH SA DE CV', 'TECHNI SEARCH SA DE CV', 'TEC0609063E9', '13255040', '', null, '1', '', '0', '', 'AMARTINEZ@TECHNISEARCH.NET', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('117', 'CARLOS SANTINO GOMEZ PLIEGO', 'CARLOS SANTINO GOMEZ PLIEGO', 'GOPC770401S31', null, '', null, '1', '', '0', '', 'EXTERIGRAPHICS@YAHOO.COM.MX', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('118', 'IMPRESIONES RESP, SA DE CV', 'IMPRESIONES RESP, SA DE CV', 'IRE151130GS3', '35', '', null, '1', '', '0', '', 'eduardo@factorpuntocom.mx,respfacturas@g', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('119', 'GRUPO  GRAFICO ROMO, SA DE CV', 'GRUPO  GRAFICO ROMO, SA DE CV', 'GGR891107FB5', null, '', null, '1', '', '0', '', 'facturacion@gruporomo.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('120', 'USATROUSER SA DE CV', 'USATROUSER SA DE CV', 'USA0907245H2', null, '', null, '1', '', '0', '', 'compas@usatrouser.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('121', 'POLIPROPILENO EMPAQUE Y PUBLICIDAD SA DE CV', 'POLIPROPILENO EMPAQUE Y PUBLICIDAD SA DE CV', 'PEP0404147H3', null, '', null, '1', '', '0', '', 'facturaspoli@ppolipropileno.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('122', 'SG IMPRESIONES DE VANGUARDIA, SA DE CV', 'SG IMPRESIONES DE VANGUARDIA, SA DE CV', 'SGI070731MK0', null, '', null, '1', '', '0', 'CARLO PICCINI', 'cpiccini@impresionesdevanguardia.com,sil', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('123', 'GRUPO DIFORMS S DE RL DE CV', 'GRUPO DIFORMS S DE RL DE CV', 'GDI140204460', null, '', null, '1', '', '0', '', 'mauro.espadas@diforms.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('124', 'DLP PHARMACEUTICAL MEXICO SA DE CV', 'DLP PHARMACEUTICAL MEXICO SA DE CV', 'DPM120222U15', null, '', null, '1', '', '0', '', 'compras_pharma@corporativodl.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('125', 'MAS SIGNOS Y MANTENIMIENTO SA DE CV', 'MAS SIGNOS Y MANTENIMIENTO SA DE CV', 'MSM110620A17', null, '', null, '1', '', '0', '', 'llopez@aplik.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('126', 'FOTOLITO CARMONA SA', 'FOTOLITO CARMONA SA', 'FCA8005126C6', '55443679', '', null, '1', '', '0', '', 'impresoscarmona_yolanda@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('127', 'INDUSTRIAL PAPELERA VENUS SA DE CV', 'INDUSTRIAL PAPELERA VENUS SA DE CV', 'IPV841114VA5', null, '', null, '1', '', '0', '', 'yvilchis@ipvenus.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('128', 'RS IMPUTS COMERCIALIZADORA SA DE CV', 'RS IMPUTS COMERCIALIZADORA SA DE CV', 'RIC1303159P8', '70342863', '', null, '1', '', '0', '', 'makemedesigns@outlook.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('129', 'GGAMAR CREATIVE COMPANY S.A. DE C.V.', 'GGAMAR CREATIVE COMPANY S.A. DE C.V.', 'GCR121116PT8', '555363', '', null, '1', '', '0', 'Lissette González', 'lissetteg@ggamarcreative.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('130', 'MANUFACTURA DE DISCOS COMPACTOS S.A. DE C.V.', 'MANUFACTURA DE DISCOS COMPACTOS S.A. DE C.V.', 'MDC9809216X2', '53998507', '', null, '1', '', '0', '', 'rorrolopez1@outlook.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('131', 'PABLO DANIEL GARCIA MORENO', 'PABLO DANIEL GARCIA MORENO', 'GAMP921122NG8', '57659940', '', null, '1', '', '0', '', 'facturas.gmex@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('132', 'DIECINUEVE 84 CREATIVA, S.A. DE C.V.', 'DIECINUEVE 84 CREATIVA, S.A. DE C.V.', 'DOC100323DU6', null, '', null, '1', '', '0', '', 'para.facturacion@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('133', 'KELISEK BINI  ALESSANDRA MIROSLAVA', 'KELISEK BINI  ALESSANDRA MIROSLAVA', 'KEBA710818TK0', null, '', null, '1', '', '0', '', 'rak.clientes@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('134', 'COMERCIAL PAPELERA ALFA S.A DE C.V.', 'COMERCIAL PAPELERA ALFA S.A DE C.V.', 'CPA140324632', '55657258', '', null, '1', '', '0', 'TELLY GONZALEZ', 'tellyalfa@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('135', 'ARGO ARTES GRAFICAS, SA', 'ARGO ARTES GRAFICAS, SA', 'AAG8107095M1', null, '', null, '1', '', '4', '', 'gabriela.beltran@argoimpresos.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('136', 'FIJATEC, SA DE CV', 'FIJATEC, SA DE CV', 'FIJ971216F75', null, '', null, '1', '', '0', '', 'ventas@corrugadoscoatitla.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('137', 'HAUSS VERGARA JORGE JOSE', 'HAUSS VERGARA JORGE JOSE', 'HAVJ800627IF9', null, '', null, '1', '', '0', '', 'jorge.hauss@packsign.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('138', 'O HNOS DE MEXICO SA DE CV', 'O HNOS DE MEXICO SA DE CV', 'OME9108015NA', null, '', null, '1', '', '0', '', 'ohnosdemexico@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('139', 'COR - LIT, SA DE CV', 'COR-LIT,  SA DE CV', 'CLI890904S72', '57092340', '', null, '1', '', '0', '', 'corlit@prodigy.net.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('140', 'I & F PRINT S.A. DE C.V.', 'I & F PRINT S.A. DE C.V.', 'IAF161112UD7', '56', '', null, '1', '', '0', '', 'facturas@ifprint.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('141', 'PHELLET DE MEXICO, SA DE CV', 'PHELLET DE MEXICO, SA DE CV', 'PME131113JM3', null, '', null, '1', '', '0', '', 'nacacvetan@yahoo.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('142', 'GRAPHO PAK GILARDI S.A. DE C.V.', 'GRAPHO PAK GILARDI S.A. DE C.V.', 'GPG861020IZ4', '53004141', '', null, '1', '', '0', '', 'GUTIERREZC@GRAPHOPAK.COM', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('143', 'ROSALES RAMIREZ ROSARIO', 'ROSALES RAMIREZ ROSARIO', 'RORR770808SR1', '5570095626', '', null, '1', '', '0', '', 'Charos77@hotmail.com; animasksales@gmail', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('144', 'DINECO S.A. DE C.V.', 'DINECO S.A. DE C.V.', 'DIN1110271F6', null, '', null, '1', '', '0', '', 'aguemez@dineco.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('145', 'LORI  DER, SA DE CV', 'LORI  DER, SA DE CV', 'LDE000101334', '26268343', '', null, '1', '', '0', '', 'facturas@lori-der.com,arivera@lori-der.c', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('146', 'LITOGRAFICA VIHUMASI, SA DE CV', 'LITOGRAFICA VIHUMASI, SA DE CV', 'LVI161019JDA', '53410454', '', null, '1', '', '0', '', 'contacto@vihumasi.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('147', 'BELICA IMPRESORES DE MEXICO, S.A. DE C.V.', 'BELICA IMPRESORES DE MEXICO, S.A. DE C.V.', 'BIM120720HH6', '57627321', '', null, '1', '', '0', '', 'gv_artesgraficas@hotmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('148', 'FOLI DE MEXICO, SA DE CV', 'FOLI DE MEXICO, SA DE C V', 'FME880210NG1', '91592100', '', null, '1', '', '0', '', 'roberto.lopez@foli.com.mx,ricardo.salman', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('149', 'SERVICIOS TECNICOS EMPRESARIALES QR DE SANTA FE', 'Servicios Técnicos Empresariales QR de Santa Fe, S', 'STE110222G38', '53635624', '', null, '1', '', '0', '', 'valpax_arte@yahoo.com.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('150', 'SOLUCIONES DE IMAGEN APLIK, SA DE CV', 'SOLUCIONES DE IMAGEN APLIK, SA DE CV', 'SIA150525UK6', null, '', null, '1', '', '0', '', 'gtellez@btcinvesrnenps.com.mx, llopez@ap', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('151', 'PLASTY HOME S.A. DE C.V', 'PLASTY HOME S.A. DE C.V', 'PHO061123T64', null, '', null, '1', '', '0', '', 'compras.plastyhome@gmail.com', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('152', 'CUSTOM PRINTING S.A. DE C.V.', 'CUSTOM PRINTING S.A. DE C.V.', 'CPR1003296F8', '55238470', '', null, '1', '', '0', '', 'direccion@customprinting.mx', '', '', '', '', '', '', '', '0');
INSERT INTO `clientes` VALUES ('153', 'HERRERA  TABOADA  CARLOS FRANCISCO', 'HERRERA  TABOADA  CARLOS FRANCISCO', 'HETC8502242T1', null, '', null, '1', '', '0', '', 'empaquescajica@outlook.com', '', '', '', '', '', '', '', '0');

-- ----------------------------
-- Table structure for cot_maquilas
-- ----------------------------
DROP TABLE IF EXISTS `cot_maquilas`;
CREATE TABLE `cot_maquilas` (
  `id_cot_maq` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad_cotizada` int(11) NOT NULL DEFAULT '0',
  `largo` decimal(11,2) NOT NULL DEFAULT '0.00',
  `ancho` decimal(11,2) NOT NULL DEFAULT '0.00',
  `tipo_producto` int(1) NOT NULL DEFAULT '1',
  `checkbox_empalme` int(1) NOT NULL DEFAULT '0',
  `checkbox_suaje_automatico` int(1) NOT NULL DEFAULT '0',
  `checkbox_suaje_automatico_arreglo` int(1) NOT NULL DEFAULT '0',
  `checkbox_suaje_manual` int(1) NOT NULL DEFAULT '0',
  `checkbox_suaje_manual_arreglo` int(1) NOT NULL DEFAULT '0',
  `checkbox_pegado_lineal_maquina` int(1) NOT NULL DEFAULT '0',
  `checkbox_pegado_lineal_maquina_arreglo` int(1) NOT NULL DEFAULT '0',
  `pegado_lineal_maquina_med_min_acabado` int(1) NOT NULL DEFAULT '0',
  `checkbox_pegado_fondo_auto_maquina` int(1) NOT NULL DEFAULT '0',
  `checkbox_pegado_fondo_auto_maquina_arreglo` int(1) NOT NULL DEFAULT '0',
  `pegado_fondo_auto_maquina_med_min_acabado` int(1) NOT NULL DEFAULT '0',
  `checkbox_pegue_manual` int(1) NOT NULL DEFAULT '0',
  `checkbox_predoblez_manual` int(1) NOT NULL DEFAULT '0',
  `checkbox_desbarbe` int(1) NOT NULL,
  `checkbox_empaque` int(1) NOT NULL DEFAULT '0',
  `total` decimal(11,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id_cot_maq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of cot_maquilas
-- ----------------------------

-- ----------------------------
-- Table structure for detalle_ordenes_compra
-- ----------------------------
DROP TABLE IF EXISTS `detalle_ordenes_compra`;
CREATE TABLE `detalle_ordenes_compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_ordencompra` int(11) DEFAULT NULL,
  `id_articulo` int(11) DEFAULT NULL,
  `cantidad` decimal(10,0) DEFAULT NULL,
  `unidad` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `precio_unitario` double DEFAULT NULL,
  `importe` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of detalle_ordenes_compra
-- ----------------------------

-- ----------------------------
-- Table structure for detalle_ordenes_produccion
-- ----------------------------
DROP TABLE IF EXISTS `detalle_ordenes_produccion`;
CREATE TABLE `detalle_ordenes_produccion` (
  `id_partida` int(11) NOT NULL AUTO_INCREMENT,
  `id_ordenproduccion` int(11) NOT NULL,
  `cant_requerida` int(11) DEFAULT NULL,
  `id_material` int(11) DEFAULT NULL,
  `tipo_medida` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `articulo` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `tipo_producto` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `selector_material` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `tipo_material` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `carton` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `med_frente` decimal(10,0) DEFAULT NULL,
  `med_fondo` decimal(10,0) DEFAULT NULL,
  `med_alto` decimal(10,0) DEFAULT NULL,
  `med_largo` decimal(10,0) DEFAULT NULL,
  `med_ancho` decimal(10,0) DEFAULT NULL,
  `tipo_impresion` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `num_tintas` int(11) DEFAULT NULL,
  `largo_tinta1` decimal(10,0) DEFAULT NULL,
  `ancho_tinta1` decimal(10,0) DEFAULT NULL,
  `largo_tinta2` decimal(10,0) DEFAULT NULL,
  `ancho_tinta2` decimal(10,0) DEFAULT NULL,
  `largo_tinta3` decimal(10,0) DEFAULT NULL,
  `ancho_tinta3` decimal(10,0) DEFAULT NULL,
  `largo_tinta4` decimal(10,0) DEFAULT NULL,
  `ancho_tinta4` decimal(10,0) DEFAULT NULL,
  `maquina_suajado` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `med_suaje` int(11) DEFAULT NULL,
  `med_cito` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `tipo_desbarbe` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `tipo_pegado` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `predoblado` bit(1) DEFAULT NULL,
  `clave_pegamento` varchar(30) COLLATE utf32_spanish_ci DEFAULT NULL,
  `pegado_con` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `num_grapas` int(11) DEFAULT NULL,
  `maquina_ranurado` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `proceso_refilado` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `maquina_empalme` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `num_ligas` int(11) DEFAULT NULL,
  `num_fajillas` int(11) DEFAULT NULL,
  `cant_granel` int(11) DEFAULT NULL,
  `cant_xpaquete` int(11) DEFAULT NULL,
  `cant_xcorrugado` int(11) DEFAULT NULL,
  `cant_xtarima` int(11) DEFAULT NULL,
  `esquineros` bit(1) DEFAULT NULL,
  `emplayado` bit(1) DEFAULT NULL,
  `impresion` bit(1) DEFAULT NULL COMMENT '1 si, 0 no',
  `tiempo_arreglo_impresion` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_impresion` decimal(10,0) DEFAULT NULL,
  `tiempo_arreglo_refilado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_refilado` decimal(10,0) DEFAULT NULL,
  `rayado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_rayado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_rayado` decimal(10,0) DEFAULT NULL,
  `flexo` bit(1) DEFAULT NULL,
  `tiempo_arreglo_flexo` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_flexo` decimal(10,0) DEFAULT NULL,
  `caiman` bit(1) DEFAULT NULL,
  `tiempo_arreglo_caiman` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_caiman` decimal(10,0) DEFAULT NULL,
  `pegado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_pegado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_arreglo` decimal(10,0) DEFAULT NULL,
  `grapado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_grapado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_grapado` decimal(10,0) DEFAULT NULL,
  `suajado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_suajado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_suajado` decimal(10,0) DEFAULT NULL,
  `flejado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_flejado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_flejado` decimal(10,0) DEFAULT NULL,
  `entarimado` bit(1) DEFAULT NULL,
  `tiempo_arreglo_entarimado` decimal(10,0) DEFAULT NULL,
  `tiempo_tiro_entarimado` decimal(10,0) DEFAULT NULL,
  `id_camion1` int(11) DEFAULT NULL,
  `id_camion2` int(11) DEFAULT NULL,
  `id_camion3` int(11) DEFAULT NULL,
  `cantidad_envio1` int(11) DEFAULT NULL,
  `cantidad_envio2` int(11) DEFAULT NULL,
  `cantidad_envio3` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_partida`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of detalle_ordenes_produccion
-- ----------------------------
INSERT INTO `detalle_ordenes_produccion` VALUES ('1', '1', '2500', null, 'option1', 'Ketchup', null, null, 'Ketchup', 'Relish', '20', '30', '40', '0', '0', '3', '4', '12', '15', '12', '15', '10', '13', '10', '13', '7', '60', '.7', 'NO', '11', null, 'SCF-1241', 'on', '0', null, null, null, '5', '0', '0', '0', '0', '0', '', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('3', '2', '1500', null, 'option1', 'Relish', null, '8', 'Relish', 'Relish', '20', '30', '40', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '8', '20', '.6', 'SI', '12', null, 'E5210', null, '0', '1', '2', '6', '1', '1', '1', '1', '1', '1', '', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('4', '0', '0', null, null, 'CAJAS CON IMPRESION', '11', '9', '5', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('5', '0', '0', null, null, 'CAJAS CON IMPRESION', '11', '9', '5', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('6', '24', '50', null, 'option1', 'CAJAS CON IMPRESION', '13', '8', '2', '68', '10', '20', '10', '12', '12', '3', '2', '12', '12', '0', '0', '12', '12', '0', '0', '7', '12', '12', '12', '4', '\0', '', 'on', '12', '3', '2', '5', '12', '12', '12', '12', '12', '12', '', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('7', '25', '50', null, 'option1', 'CAJAS CON IMPRESION', '13', '8', '2', '68', '10', '20', '10', '12', '12', '3', '2', '12', '12', '0', '0', '12', '12', '0', '0', '7', '12', '12', '12', '4', '\0', '', 'on', '12', '3', '2', '5', '12', '12', '12', '12', '12', '12', '', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('8', '26', '8500', null, 'option1', 'CAJAS CON IMPRESION', '11', '8', '1', '251', '10', '20', '30', '40', '50', '3', '1', '15', '15', '0', '0', '0', '0', '0', '0', '7', '60', '.6', 'NO', '4', '\0', 'c1126', 'on', '0', '3', '2', '5', '10', '10', '10', '10', '10', '10', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('9', '27', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('10', '28', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('11', '29', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('12', '30', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('13', '31', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('14', '32', '0', null, null, 'null', 'null', null, 'null', 'null', '0', '0', '0', '0', '0', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', null, null, '', null, '0', null, null, null, '0', '0', '0', '0', '0', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `detalle_ordenes_produccion` VALUES ('15', '33', '150', null, 'option1', 'CAJAS SIN IMPRESION', '1', '8', 'null', 'null', '30', '30', '40', '130', '40', null, '0', '0', '0', '0', '0', '0', '0', '0', '0', null, '0', '', '', '4', null, '', null, '0', '3', null, null, '0', '0', '0', '25', '0', '0', null, '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for detalle_procesos
-- ----------------------------
DROP TABLE IF EXISTS `detalle_procesos`;
CREATE TABLE `detalle_procesos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `nombre_trabajo` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_maquina` int(11) DEFAULT NULL,
  `nombre_maquina` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_proceso` int(11) DEFAULT NULL,
  `nombre_proceso` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_operador` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `nombre_operador` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `fechahora_registro` datetime DEFAULT NULL,
  `fechahora_inicio` datetime DEFAULT NULL,
  `fechahora_fin` datetime DEFAULT NULL,
  `cant_requerida` int(11) DEFAULT NULL,
  `cantidad_ok` int(11) DEFAULT NULL,
  `cantidad_merma` int(11) DEFAULT NULL,
  `tiempo` time DEFAULT NULL,
  `notas` varchar(255) COLLATE utf32_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of detalle_procesos
-- ----------------------------
INSERT INTO `detalle_procesos` VALUES ('1', '2', 'PRUEBA ORDEN 2', '6', 'EMPALMADORA SEMIAUTOMATICA', '10', 'EMPALME', 'ADMIN', 'ALEJANDRO FLORES', '2017-11-18 04:26:48', '2017-11-18 04:26:48', '2017-11-18 04:27:17', '1500', '800', '100', '00:00:06', 'Primer prueba correcta');
INSERT INTO `detalle_procesos` VALUES ('2', '2', 'PRUEBA ORDEN 2', '1', 'CAIMAN', '4', 'RANURADO', 'ADMIN', 'ALEJANDRO FLORES', '2017-11-20 16:55:40', '2017-11-20 16:55:40', '2017-11-20 16:58:14', '1500', '1350', '20', '00:01:26', '');

-- ----------------------------
-- Table structure for direcciones_clientes
-- ----------------------------
DROP TABLE IF EXISTS `direcciones_clientes`;
CREATE TABLE `direcciones_clientes` (
  `id_direccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `id_tipodireccion` int(11) NOT NULL,
  `id_estatus` int(11) NOT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `colonia` varchar(50) DEFAULT NULL,
  `ciudad` varchar(30) DEFAULT NULL,
  `municipio` varchar(30) DEFAULT NULL,
  `estado` varchar(30) DEFAULT NULL,
  `cp` varchar(5) DEFAULT NULL,
  `nota` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_direccion`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of direcciones_clientes
-- ----------------------------
INSERT INTO `direcciones_clientes` VALUES ('1', '1', '2', '1', 'EMILIANO ZAPATA', 'SAN JERONIMO TEPETLACALCO', '', '', 'ESTADO DE MEXICO', '54090', '');
INSERT INTO `direcciones_clientes` VALUES ('2', '2', '2', '1', 'AVENIDA DEL VERGEL', 'PRESIDENTES DE MEXICO', 'CD DE MEXICO', '', '', '09740', '');
INSERT INTO `direcciones_clientes` VALUES ('3', '3', '2', '1', 'NORTE 73', 'JARDIN DE ASPEITIA, AZCAPOTZALCO', 'CD DE MEXICO', '', '', '02530', '');
INSERT INTO `direcciones_clientes` VALUES ('4', '4', '2', '1', 'CALLE LIBRA', 'UNIDAD IZCALLI', '', '', 'ESTADO DE MEXICO', '55030', '');
INSERT INTO `direcciones_clientes` VALUES ('5', '5', '2', '1', 'PROVIDENCIA', 'LOS OLIVOS', 'CD DE MEXICO', '', '', '13220', '');
INSERT INTO `direcciones_clientes` VALUES ('6', '6', '2', '1', 'LAGO DE CHALCO', 'ANAHUAC', 'CD DE MEXICO', '', '', '11320', '');
INSERT INTO `direcciones_clientes` VALUES ('7', '7', '2', '1', '5 DEMAYO', 'PROVIDENCIA', 'CD DE MEXICO', '', '', '02440', '');
INSERT INTO `direcciones_clientes` VALUES ('8', '8', '2', '1', 'AVENIDA TOLTECA', 'SAN PEDRO DE LOS PINOS', 'CD DE MEXICO', '', '', '01180', '');
INSERT INTO `direcciones_clientes` VALUES ('9', '9', '2', '1', '5 DE FEBRERO', 'SANTA CLARA COATITLA', '', '', 'ESTADO DE MEXICO', '55540', '');
INSERT INTO `direcciones_clientes` VALUES ('10', '10', '2', '1', 'ISLA TAIPEI', 'JARDINES DE MORELOS, ECATEPEC', '', '', 'ESTADO DE MEXICO', '55070', '');
INSERT INTO `direcciones_clientes` VALUES ('11', '11', '2', '1', 'NORTE 176', 'PENSADOR MEXICANO', 'CD DE MEXICO', '', '', '15510', '');
INSERT INTO `direcciones_clientes` VALUES ('12', '12', '2', '1', 'VICENTE  GUERRERO', 'DEL CARMEN', 'CD DE MEXICO', 'COYOCAN', '', '04100', '');
INSERT INTO `direcciones_clientes` VALUES ('13', '13', '2', '1', 'AV. TLAHUAC', 'EX HACIENDA DE SAN NICOLAS TOLENTINO', 'CD DE MEXICO', '', '', '09850', '');
INSERT INTO `direcciones_clientes` VALUES ('14', '14', '2', '1', 'CALLE BIZNAGA', 'LAS PALMAS, ALVARO OBREGON', 'CD DE MEXICO', '', '', '01110', '');
INSERT INTO `direcciones_clientes` VALUES ('15', '15', '2', '1', 'REPUBLICA DE COLOMBIA', 'CENTRO (AREA 3)', 'CD DE MEXICO', '', '', '06020', '');
INSERT INTO `direcciones_clientes` VALUES ('16', '16', '2', '1', 'CALLE TEMAZCAL', 'TLALNEPANTLA', '', '', 'ESTADO DE MEXICO', '54060', '');
INSERT INTO `direcciones_clientes` VALUES ('17', '17', '2', '1', 'RINCONADA DE ABETOS', 'RINCONADA DE SAN FELIPE, COACALCO', '', '', 'ESTADO DE MEXICO', '55715', '');
INSERT INTO `direcciones_clientes` VALUES ('18', '18', '2', '1', 'CAMINO REAL DE TOLUCA', 'BELLAVISTA', 'CD DE MEXICO', '', '', '01140', '');
INSERT INTO `direcciones_clientes` VALUES ('19', '19', '2', '1', 'DEMOCRACIAS', 'SAN MIGUEL AMANTLA, AZCAPOTZALCO', 'CD DE MEXICO', '', '', '02700', '');
INSERT INTO `direcciones_clientes` VALUES ('20', '20', '2', '1', 'AVENIDA 5 DE FEBRERO', 'OBRERA', 'CD DE MEXICO', '', '', '06800', '');
INSERT INTO `direcciones_clientes` VALUES ('21', '21', '2', '1', 'PONIENTE 44', 'COL. SAN SALVADOR XOCHIMANCA', 'CD DE MEXICO', '', '', '02870', '');
INSERT INTO `direcciones_clientes` VALUES ('22', '22', '2', '1', 'MESONES', 'CENTRO', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06090', '');
INSERT INTO `direcciones_clientes` VALUES ('23', '23', '2', '1', 'CALLE TOLTECA', 'SAN PEDRO DE LOS PINOS , ALVARO OBREGON', 'CD DE MEXICO', '', '', '01180', '');
INSERT INTO `direcciones_clientes` VALUES ('24', '24', '2', '1', 'AV. TLAHUAC', 'LOS REYES CULHUACAN, IZTAPALAPA', 'CD DE MEXICO', '', '', '09840', '');
INSERT INTO `direcciones_clientes` VALUES ('25', '25', '2', '1', 'LAGO DE CHAPALA', 'ANAHUAC', 'CD DE MEXICO', '', '', '11320', '');
INSERT INTO `direcciones_clientes` VALUES ('26', '26', '2', '1', 'BLVD. MANUEL AVILA CAMACHO', 'LOMAS DE SOTELO, NAUCALPAN DE JUAREZ', '', '', 'ESTADO DE MEXICO', '53390', '');
INSERT INTO `direcciones_clientes` VALUES ('27', '27', '2', '1', 'CALZ.  MARIANO  ESCOBEDO', 'NUEVA  ANZURES', 'CD DE MEXICO', 'MIGUEL  HIDALGO', '', '11590', '');
INSERT INTO `direcciones_clientes` VALUES ('28', '28', '2', '1', 'JUAN FERNANDEZ ALBARRAN', 'SAN PABLO XALPA', '', 'TLALNEPANTLA DE BAZ', 'ESTADO DE MEXICO', '54090', '');
INSERT INTO `direcciones_clientes` VALUES ('29', '29', '2', '1', 'AV. REFINERIA AZCAPOTZALCO', 'SANTA INES', 'CD DE MEXICO', '', '', '02140', '');
INSERT INTO `direcciones_clientes` VALUES ('30', '30', '2', '1', 'EMILIANO ZAPATA', 'SAN JERONIMO TEPETLACALCO', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54090', '');
INSERT INTO `direcciones_clientes` VALUES ('31', '31', '2', '1', 'MARCELINO DAVALOS', 'ALGARIN', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06880', '');
INSERT INTO `direcciones_clientes` VALUES ('32', '32', '2', '1', 'MAIZ', 'GRANJAS ESMERALDA', 'CD DE MEXICO', '', '', '09810', '');
INSERT INTO `direcciones_clientes` VALUES ('33', '33', '2', '1', 'BOSQUES DE DURAZNOS NUM. 69 TORRE A', 'BOSQUES DE LAS LOMAS', 'CD DE MEXICO', 'MIGUEL HIDALGO', '', '11700', '');
INSERT INTO `direcciones_clientes` VALUES ('34', '34', '2', '1', 'ISLA MEZCALA', 'JARDINES DE MORELOS', '', 'ECATEPEC DE MORELOS', 'ESTADO DE MEXICO', '55070', '');
INSERT INTO `direcciones_clientes` VALUES ('35', '35', '2', '1', 'ISLA MEZCALA', 'JARDINES DE MORELOS', '', 'ECATEPEC DE MORELOS', 'ESTADO DE MEXICO', '55070', '');
INSERT INTO `direcciones_clientes` VALUES ('36', '36', '2', '1', 'MESONES', 'CENTRO', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06090', '');
INSERT INTO `direcciones_clientes` VALUES ('37', '37', '2', '1', 'METEPEC', 'AMPLIACION  SAN  ESTEBAN', '', 'NAUCALPAN', 'ESTADO DE MEXICO', '53550', '');
INSERT INTO `direcciones_clientes` VALUES ('38', '38', '2', '1', 'PRIMERA CERRADA DE PALOMARES', 'MAGISTERIAL', 'CD DE MEXICO', 'TLALPAN', '', '14360', '');
INSERT INTO `direcciones_clientes` VALUES ('39', '39', '2', '1', 'AV. AZCAPOTZALCO', 'AZCAPOTZALCO CENTRO', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02000', '');
INSERT INTO `direcciones_clientes` VALUES ('40', '40', '2', '1', 'CUARTA CERRADA DE CANTIL', 'SAN MIGUEL TOPILEJO', 'CD DE MEXICO', '', '', '14500', '');
INSERT INTO `direcciones_clientes` VALUES ('41', '41', '2', '1', '4A CERRADA DE CANTIL', 'SAN MIGUEL TOPILEJO', 'CD DE MEXICO', '', '', '14500', '');
INSERT INTO `direcciones_clientes` VALUES ('42', '42', '2', '1', '5 DE FEBRERO', 'SANTA CLARA COATITLA', '', 'ECATEPEC', 'ESTADO DE MEXICO', '55540', '');
INSERT INTO `direcciones_clientes` VALUES ('43', '43', '2', '1', 'AVENIDA DE LAS TORRES', 'NUEVA INDUSTRIAL VALLEJO', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07700', '');
INSERT INTO `direcciones_clientes` VALUES ('44', '44', '2', '1', 'BOULEVARD ADOLFO LOPEZ MATEOS', 'TLACOPAC', 'CD DE MEXICO', '', '', '01049', '');
INSERT INTO `direcciones_clientes` VALUES ('45', '45', '2', '1', 'GUANABANA', 'NUEVA SANTA MARIA', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02800', '');
INSERT INTO `direcciones_clientes` VALUES ('46', '46', '2', '1', 'CRUZ DEL SUR', 'PRADO CHURUBUSCO', 'CD DE MEXICO', '', '', '04230', '');
INSERT INTO `direcciones_clientes` VALUES ('47', '47', '2', '1', 'PERA VERDIÑAL', 'POTRERO DE LA NORIA', 'CD DE MEXICO', 'XOCHIMILCO', '', '16010', '');
INSERT INTO `direcciones_clientes` VALUES ('48', '48', '2', '1', 'NORTE 16', 'MAXIMINO AVILA CAMACHO', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07380', '');
INSERT INTO `direcciones_clientes` VALUES ('49', '49', '2', '1', 'AVENA', 'GRANJAS MEXICO', 'CD DE MEXICO', 'IZTACALCO', '', '08400', '');
INSERT INTO `direcciones_clientes` VALUES ('50', '50', '2', '1', 'ANTONIO MANUEL RIVERA', 'INDUSTRIAL TLALNEPANTLA', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54030', '');
INSERT INTO `direcciones_clientes` VALUES ('51', '51', '2', '1', 'MUNICIPIO LIBRE', 'PORTALES ORIENTE', 'CD DE MEXICO', '', '', '03570', '');
INSERT INTO `direcciones_clientes` VALUES ('52', '52', '2', '1', 'MIGUEL ANGEL  DE QUEVEDO', 'CHIMALISTAC', 'CD DE MEXICO', 'ALVARO OBREGON', '', '01050', '');
INSERT INTO `direcciones_clientes` VALUES ('53', '53', '2', '1', 'CIRCUITO BOSQUES DE LOS NOGALEZ', 'LOS HEROES TECAMAC', '', '', 'ESTADO DE MEXICO', '55765', '');
INSERT INTO `direcciones_clientes` VALUES ('54', '54', '2', '1', 'HOMERO', 'POLANCO V  SECCION', 'CD DE MEXICO', 'MIGUEL HIDALGO', '', '11560', '');
INSERT INTO `direcciones_clientes` VALUES ('55', '55', '2', '1', 'MIGUEL  ALLENDE', 'SANTIAGO TEPALCAPA', '', 'CUAUTITLAN  IZCALLI', 'ESTADO DE MEXICO', '54743', '');
INSERT INTO `direcciones_clientes` VALUES ('56', '56', '2', '1', 'YAXCABA', 'PEDREGAL DE SAN NICOLAS', 'CD DE MEXICO', 'TLALPAN', '', '14100', '');
INSERT INTO `direcciones_clientes` VALUES ('57', '57', '2', '1', 'CUITLAHUAC', 'SAN SALVADOR XOCHIMANCA', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02870', '');
INSERT INTO `direcciones_clientes` VALUES ('58', '58', '2', '1', 'SAN ALBERTO', 'REAL DE SAN VICENTE', '', '', 'ESTADO DE MEXICO', '56380', '');
INSERT INTO `direcciones_clientes` VALUES ('59', '59', '2', '1', 'JALAPA', 'ROMA', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06700', '');
INSERT INTO `direcciones_clientes` VALUES ('60', '60', '2', '1', 'CALLE INSURGENTES NORTE', 'TLACAMACA', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07380', '');
INSERT INTO `direcciones_clientes` VALUES ('61', '61', '2', '1', 'SUCRE', 'MODERNA', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03510', '');
INSERT INTO `direcciones_clientes` VALUES ('62', '62', '2', '1', 'QUERETARO', 'ROMA', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06700', '');
INSERT INTO `direcciones_clientes` VALUES ('63', '63', '2', '1', '11 DE SEPTIEMBRE  MZ. 12 LT 7', '19 DE SEPTIEMBRE', '', 'ECATEPEC DE MORELOS', 'ESTADO DE MEXICO', '55070', '');
INSERT INTO `direcciones_clientes` VALUES ('64', '64', '2', '1', 'AV.16 DE SEPTIEMBRE', 'INDUSTRIAL NAUCALPAN  3A.SECCION', '', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53370', '');
INSERT INTO `direcciones_clientes` VALUES ('65', '65', '2', '1', 'PRIVADA  HIDALGO', 'CENTRO', '', 'TLANEPANTLA DE BAZ', 'ESTADO DE MEXICO', '54000', '');
INSERT INTO `direcciones_clientes` VALUES ('66', '66', '2', '1', 'TALLO', 'EL RELOJ', 'CD DE MEXICO', 'COYOACÁN', '', '04640', '');
INSERT INTO `direcciones_clientes` VALUES ('67', '67', '2', '1', 'ORIENTE', 'MARTIRES DE RIO BLANCO', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07880', '');
INSERT INTO `direcciones_clientes` VALUES ('68', '68', '2', '1', 'WAGNER', 'VALLEJO', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07870', '');
INSERT INTO `direcciones_clientes` VALUES ('69', '69', '2', '1', 'NORTE', 'INDUSTRIAL VALLEJO', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02300', '');
INSERT INTO `direcciones_clientes` VALUES ('70', '70', '2', '1', '21 DE MARZO', 'SANTA CRUZ BUENAVISTA', '', 'PUEBLA', 'PUEBLA', '72150', '');
INSERT INTO `direcciones_clientes` VALUES ('71', '71', '2', '1', 'CALLE  10', 'GRANJAS SAN  ANTONIO', 'CD DE MEXICO', 'IZTAPALAPA', '', '09070', '');
INSERT INTO `direcciones_clientes` VALUES ('72', '72', '2', '1', 'PROLONGACION REFORMA', 'SANTA FE  CUAJIMALPA', 'CD DE MEXICO', 'CUAJIMALPA DE MORELOS', '', '05348', '');
INSERT INTO `direcciones_clientes` VALUES ('73', '73', '2', '1', 'INSURGENTES 686', 'DEL VALLE NORTE', 'CD DE MEXICO', 'BENITO  JUAREZ', '', '03103', '');
INSERT INTO `direcciones_clientes` VALUES ('74', '74', '2', '1', 'AVENIDA  MANUEL AVILA CAMACHO', 'EL CHAMIZAL', '', 'ECATEPEC DE MORELOS', 'ESTADO DE MEXICO', '55270', '');
INSERT INTO `direcciones_clientes` VALUES ('75', '75', '2', '1', 'MARCOS N MENDEZ', 'SAN SEBASTIAN TECOLOXTITLAN', 'CD DE MEXICO', 'IZTAPALAPA', '', '09520', '');
INSERT INTO `direcciones_clientes` VALUES ('76', '76', '2', '1', 'CALLE  MONTE ELBRUZ   132', 'LOMAS DE CHAPULTEC 1RA SECC.', 'CD DE MEXICO', 'MIGUEL HIDALGO', '', '11000', '');
INSERT INTO `direcciones_clientes` VALUES ('77', '77', '2', '1', 'PASEO DE LAS  JACARANDAS', 'SANTA  MARIA  INSURGENTES', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06430', '');
INSERT INTO `direcciones_clientes` VALUES ('78', '78', '2', '1', 'NORTE 5', 'MARIA ISABEL VALLE DE CHALCO', '', 'SOLIDARIDAD', 'ESTADO DE MEXICO', '56615', '');
INSERT INTO `direcciones_clientes` VALUES ('79', '79', '2', '1', 'MEDELLIN', 'ROMA SUR', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06700', '');
INSERT INTO `direcciones_clientes` VALUES ('80', '80', '2', '1', 'CALLE  23', 'PRO- HOGAR', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02600', '');
INSERT INTO `direcciones_clientes` VALUES ('81', '81', '2', '1', 'BARRANCA HONDA', 'SAN MARTIN OBISPO', '', 'CUAUTITLAN  IZCALLI', 'ESTADO DE MEXICO', '54769', '');
INSERT INTO `direcciones_clientes` VALUES ('82', '82', '2', '1', 'AV.  ALFREDO DEL MAZO', 'ZONA INDUSTRIAL  2  (MEXICO NUEVO)', '', 'ATIZAPAN DE ZARAGOZA', 'ESTADO DE MEXICO', '52968', '');
INSERT INTO `direcciones_clientes` VALUES ('83', '83', '2', '1', 'PRIMERA CERRADA DE MINAS', 'NICANOR ARVIDE', 'CD DE MEXICO', 'ALVARO  OBREGON', '', '01280', '');
INSERT INTO `direcciones_clientes` VALUES ('84', '84', '2', '1', 'MUNICIPIO  LIBRE', 'PORTALES', 'CD DE MEXICO', 'BENITO  JUAREZ', '', '03300', '');
INSERT INTO `direcciones_clientes` VALUES ('85', '85', '2', '1', 'SAN ANTONIO  ABAD', 'OBRERA', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06800', '');
INSERT INTO `direcciones_clientes` VALUES ('86', '86', '2', '1', 'AV. JUAREZ', 'EL SALVADOR', '', '', 'PUEBLA', '72320', '');
INSERT INTO `direcciones_clientes` VALUES ('87', '87', '2', '1', 'ESPAÑA', 'SAN  NICOLAS  TOLENTINO', 'CD DE MEXICO', 'IZTAPALAPA', '', '09850', '');
INSERT INTO `direcciones_clientes` VALUES ('88', '88', '2', '1', 'AV. TEJOCOTES', 'SAN MARTIN OBISPO TEPETLIXPA', '', 'CUAUTITLAN IZCALLI', 'ESTADO DE MEXICO', '54763', '');
INSERT INTO `direcciones_clientes` VALUES ('89', '89', '2', '1', 'DEMOCRACIAS', 'SAN MIGUEL AMANTLA', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02700', '');
INSERT INTO `direcciones_clientes` VALUES ('90', '90', '2', '1', 'GRAL. PUEBLITA SUR', 'EL MORAL', '', 'HEROICA ZITACUARO', 'ESTADO DE MEXICO', '61514', '');
INSERT INTO `direcciones_clientes` VALUES ('91', '91', '2', '1', 'AV. RIO DE GUADALUPE', 'SAN JUAN DE ARAGON', 'CD DE MEXICO', 'GUSTAVO  A. MADERO', '', '07950', '');
INSERT INTO `direcciones_clientes` VALUES ('92', '92', '2', '1', 'CALLE PORTUGAL', 'JARDINES DE CERRO GORDO', '', 'ECATEPEC', 'ESTADO DE MEXICO', '55100', '');
INSERT INTO `direcciones_clientes` VALUES ('93', '93', '2', '1', 'VALLE DE BRAVO', 'LA LOMA TLALNEMEX', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54070', '');
INSERT INTO `direcciones_clientes` VALUES ('94', '94', '2', '1', 'LEONA VICARIO', 'SANTA  MARIA  AZTAHUACAN', 'CD DE MEXICO', 'IZTAPALAPA', '', '09500', '');
INSERT INTO `direcciones_clientes` VALUES ('95', '95', '2', '1', 'LA POLAR', 'INDUSTRIAL', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07800', '');
INSERT INTO `direcciones_clientes` VALUES ('96', '96', '2', '1', 'SAN ISIDRO', 'SAN ANTONIO', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02760', '');
INSERT INTO `direcciones_clientes` VALUES ('97', '97', '2', '1', 'COREA', 'ROMERO  RUBIO', 'CD DE MEXICO', 'VENUSTIANO CARRANZA', '', '15400', '');
INSERT INTO `direcciones_clientes` VALUES ('98', '98', '2', '1', 'CALLE NORTE 11', 'MARIA ISABEL', 'CD DE MEXICO', 'VALLE DE CHALCO SOLIDARIDAD', '', '56615', '');
INSERT INTO `direcciones_clientes` VALUES ('99', '99', '2', '1', 'CALLE PRADO  ORIENTE', 'SAN FRANCISCO CUAUTLALPAN', '', 'NAUCALPAN', 'ESTADO DE MEXICO', '53569', '');
INSERT INTO `direcciones_clientes` VALUES ('100', '100', '2', '1', 'KM.27.5   CARR.  LAGO DE GUADALUPE', 'SAN PEDRO BARRIENTOS', '', 'TLALNEPANTLA DE BAS', 'ESTADO DE MEXICO', '54010', '');
INSERT INTO `direcciones_clientes` VALUES ('101', '101', '2', '1', 'AV.  CEYLAN', 'INDUSTRIAL VALLEJO', 'CD DE MEXICO', 'GUSTAVO A MADERO', '', '02300', '');
INSERT INTO `direcciones_clientes` VALUES ('102', '102', '2', '1', 'ALMENEAS  25', 'VILLA DEL REALTECAMACDE FELIPEVILLANUEVA', '', 'TECAMAC', 'ESTADO DE MEXICO', '55749', '');
INSERT INTO `direcciones_clientes` VALUES ('103', '103', '2', '1', 'GUILLERMO  BARROSO', 'FRACC. INDUSTRIAL LAS ARMAS', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54080', '');
INSERT INTO `direcciones_clientes` VALUES ('104', '105', '2', '1', 'AVENIDA 1', 'PARQUE IND CARTAGENA', '', 'TULTITLAN', 'ESTADO DE MEXICO', '54900', '');
INSERT INTO `direcciones_clientes` VALUES ('105', '106', '2', '1', 'ISABEL LA CATOLICA 6', 'NAUCALPAN CENTRO', '', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53000', '');
INSERT INTO `direcciones_clientes` VALUES ('106', '107', '2', '1', 'RUBEN M. CAMPOS', 'VILLA DE CORTES', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03530', '');
INSERT INTO `direcciones_clientes` VALUES ('107', '108', '2', '1', '12', 'SAN PEDRO DE LOS PINOS', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03800', '');
INSERT INTO `direcciones_clientes` VALUES ('108', '109', '2', '1', 'CANELA', 'GRANJAS MEXICO', 'CD DE MEXICO', 'IZTACALCO', '', '08400', '');
INSERT INTO `direcciones_clientes` VALUES ('109', '110', '2', '1', 'CANAL DE MIRAMONTES', 'CAMPESTRE CHURUBUSCO', 'CD DE MEXICO', 'COYOACAN', '', '04200', '');
INSERT INTO `direcciones_clientes` VALUES ('110', '111', '2', '1', 'LEBRIJA', 'CERRO DE LA ESTRELLA', 'CD DE MEXICO', 'IZTAPALAPA', '', '09860', '');
INSERT INTO `direcciones_clientes` VALUES ('111', '112', '2', '1', 'INSTITUTO POLITECNICO NACIONAL', 'TLACAMACA', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07380', '');
INSERT INTO `direcciones_clientes` VALUES ('112', '113', '2', '1', 'POPOCATEPETL', 'PORTALES', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03300', '');
INSERT INTO `direcciones_clientes` VALUES ('113', '114', '2', '1', 'PENNSYLVANIA 15', 'NAPOLES', 'CD DE MEXICO', 'BENITO  JUAREZ', '', '03810', '');
INSERT INTO `direcciones_clientes` VALUES ('114', '115', '2', '1', 'LAURA MENDEZ DE CUENCA', 'OBRERA', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06800', '');
INSERT INTO `direcciones_clientes` VALUES ('115', '116', '2', '1', 'PONIENTE 134', 'INDUSTRIAL VALLEJO', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02300', '');
INSERT INTO `direcciones_clientes` VALUES ('116', '117', '2', '1', 'CARRETERA OCOYOACAC SANTIAGO TIANGUISTENCO LOTE 14', 'AGUA BLANCA', '', 'PARQUE INDUSTRIAL CAPULHUAC', 'ESTADO DE MEXICO', '52710', '');
INSERT INTO `direcciones_clientes` VALUES ('117', '118', '2', '1', 'PEDRO CORTES', 'SANTA BARBARA', '', 'TOLUCA', 'ESTADO DE MEXICO', '50050', '');
INSERT INTO `direcciones_clientes` VALUES ('118', '119', '2', '1', 'VIADUCTO  RIO BECERRA', 'NAPOLES', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03810', '');
INSERT INTO `direcciones_clientes` VALUES ('119', '120', '2', '1', 'SAN JOSE DE LOS LEONES', 'LAZARO CARDENAS', '', 'NAUCALPAN', 'ESTADO DE MEXICO', '53560', '');
INSERT INTO `direcciones_clientes` VALUES ('120', '121', '2', '1', '5', 'FRACC. INDUSTRIAL ALCE BLANCO', '', 'NAUCALPAN  DE JUAREZ', 'ESTADO DE MEXICO', '53370', '');
INSERT INTO `direcciones_clientes` VALUES ('121', '122', '2', '1', 'MAR MEDITERRANEO', 'TACUBA', 'CD DE MEXICO', 'MIGUEL HIDALGO', '', '11410', '');
INSERT INTO `direcciones_clientes` VALUES ('122', '123', '2', '1', 'RUMANIA', 'PORTALES SUR', 'CD DE MEXICO', 'BENITO  JUAREZ', '', '03300', '');
INSERT INTO `direcciones_clientes` VALUES ('123', '124', '2', '1', 'PONIENTE', 'CAPULTITLAN', 'CD DE MEXICO', 'GUSTAVO A MADERO', '', '07370', '');
INSERT INTO `direcciones_clientes` VALUES ('124', '125', '2', '1', 'UXMAL', 'NARVARTE', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03020', '');
INSERT INTO `direcciones_clientes` VALUES ('125', '126', '2', '1', 'CASTORENA', 'CUAJIMALPA', 'CD DE MEXICO', 'CUAJIMALPA DE MORELOS', '', '05000', '');
INSERT INTO `direcciones_clientes` VALUES ('126', '127', '2', '1', 'PIEDRA DEL SOL', 'AVANTE', 'CD DE MEXICO', 'COYOACAN', '', '04460', '');
INSERT INTO `direcciones_clientes` VALUES ('127', '128', '2', '1', 'EMILIANO ZAPATA', 'SAN JERONIMO TEPETLACALCO', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54090', '');
INSERT INTO `direcciones_clientes` VALUES ('128', '129', '2', '1', 'PROVIDENCIA', 'DEL VALLE', 'CD DE MEXICO', 'BENITO JUÁREZ', '', '03000', '');
INSERT INTO `direcciones_clientes` VALUES ('129', '130', '2', '1', 'HACIENDA DE CARLOME', 'HACIENDA DE ECHEGARAY', '', 'NAUCALPAN', 'ESTADO DE MEXICO', '53300', '');
INSERT INTO `direcciones_clientes` VALUES ('130', '131', '2', '1', 'LAGO CHIEM', 'ANAHUAC', 'CD DE MEXICO', 'MIGUEL HIDALGO', '', '11320', '');
INSERT INTO `direcciones_clientes` VALUES ('131', '132', '2', '1', 'CALLE MALINALCO', 'MARAVILLAS', '', 'NEZAHUALCOYOTL', 'ESTADO DE MEXICO', '57410', '');
INSERT INTO `direcciones_clientes` VALUES ('132', '133', '2', '1', 'av coyoacan', 'DEL VALLE', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03100', '');
INSERT INTO `direcciones_clientes` VALUES ('133', '134', '2', '1', 'ALFREDO CHAVERO', 'OBRERA', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06380', '');
INSERT INTO `direcciones_clientes` VALUES ('134', '135', '2', '1', 'DOCTOR JOSE NEGRETE HERRERA', 'CIUDAD ADOLFO LOPEZ MATEOS', '', 'ATIZAPAN DE ZARAGOZA', 'ESTADO DE MEXICO', '52900', '');
INSERT INTO `direcciones_clientes` VALUES ('135', '136', '2', '1', 'DE LA VICTORIA', 'FRACC. IND.  ALCE  BLANCO', '', 'NAUCALPAN', 'ESTADO DE MEXICO', '53370', '');
INSERT INTO `direcciones_clientes` VALUES ('136', '238', '2', '1', 'AV.3', 'SANTA  ROSA', 'CD DE MEXICO', 'GUSTAVO A. MADERO', '', '07620', '');
INSERT INTO `direcciones_clientes` VALUES ('137', '239', '2', '1', 'ANTONIO CASO', 'CIUDAD SATELITE', 'NAUCALPAN DE JUAREZ', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53100', '');
INSERT INTO `direcciones_clientes` VALUES ('138', '240', '2', '1', 'ADOLFO PRIETO', 'ACACIAS', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03240', '');
INSERT INTO `direcciones_clientes` VALUES ('139', '241', '2', '1', 'REGINA', 'CENTRO', 'CD DE MEXICO', 'CUAUHTEMOC', '', '06080', '');
INSERT INTO `direcciones_clientes` VALUES ('140', '242', '2', '1', 'AV. INSURGENTES SUR', 'CIUDAD DE LOS DEPORTES', 'CD DE MEXICO', 'BENITO JUAREZ', '', '03710', '');
INSERT INTO `direcciones_clientes` VALUES ('141', '243', '2', '1', 'PROL.REFORMA', 'CRUZ MANCA SANTA  FE', 'CD DE MEXICO', 'CUAJIMALPA DE MORELOS', '', '05349', '');
INSERT INTO `direcciones_clientes` VALUES ('142', '244', '2', '1', 'PROGRESO', 'FRACC IND ALCE BLANCO', 'NAUCALPAN DE JUAREZ', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53370', '');
INSERT INTO `direcciones_clientes` VALUES ('143', '245', '2', '1', 'PERSEO', 'EL ROSARIO', 'CD DE MEXICO', 'AZCAPOTZALCO', '', '02100', '');
INSERT INTO `direcciones_clientes` VALUES ('144', '246', '2', '1', 'COATEPEC', 'SAN BARTOLOME COATEPEC', '', 'HUIXQUILUCAN', 'ESTADO DE MEXICO', '52770', '');
INSERT INTO `direcciones_clientes` VALUES ('145', '247', '2', '1', 'GUILLERMO  BARROSO', 'INDUSTRIAL LAS  ARMAS', '', 'TLALNEPANTLA', 'ESTADO DE MEXICO', '54080', '');
INSERT INTO `direcciones_clientes` VALUES ('146', '248', '2', '1', 'LAGO  CHAPALA', 'ANAHUAC  II  SECCION', 'CD DE MEXICO', 'MIGUEL  HIDALGO', '', '11320', '');
INSERT INTO `direcciones_clientes` VALUES ('147', '249', '2', '1', 'NORTE 29', 'MOCTEZUMA 2° SECCIÓN', 'CD DE MEXICO', ' VENUSTIANO CARRANZA', '', '15530', '');
INSERT INTO `direcciones_clientes` VALUES ('148', '250', '2', '1', 'CALLE NEGRA  MODELO', 'CERVECERIA  MODELO', '', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53330', '');
INSERT INTO `direcciones_clientes` VALUES ('149', '251', '2', '1', 'CERRADA CENTRAL', 'MODELO', '', 'NAUCALPAN DE JUAREZ', 'ESTADO DE MEXICO', '53330', '');
INSERT INTO `direcciones_clientes` VALUES ('150', '252', '2', '1', 'BLVD.  ADOLFO RUIZ CORTINEZ', 'RINCON DEL PEDREGAL', 'CD DE MEXICO', 'TLALPAN', '', '14120', '');
INSERT INTO `direcciones_clientes` VALUES ('151', '253', '2', '1', 'PUEBLA ESQUINA FERROCARRIL NORTE', 'PARQUE INDUSTRIAL IXTAPALUCA', '', 'IXTAPALUCA', 'ESTADO DE MEXICO', '56530', '');
INSERT INTO `direcciones_clientes` VALUES ('152', '254', '2', '1', 'AZAFRAN', 'GRANJAS MEXICO', 'CD DE MEXICO', 'IZTACALCO', '', '08400', '');
INSERT INTO `direcciones_clientes` VALUES ('153', '255', '2', '1', 'CALLE  MANUEL BUENROSTRO', 'LI LEGISLATURA', 'CD DE MEXICO', 'GUSTAVO A MADERO', '', '07456', '');

-- ----------------------------
-- Table structure for direcciones_proveedores
-- ----------------------------
DROP TABLE IF EXISTS `direcciones_proveedores`;
CREATE TABLE `direcciones_proveedores` (
  `id_direccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) NOT NULL,
  `id_tipodireccion` int(11) NOT NULL,
  `id_estatus` int(11) NOT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `colonia` varchar(50) DEFAULT NULL,
  `ciudad` varchar(30) DEFAULT NULL,
  `municipio` varchar(30) DEFAULT NULL,
  `estado` varchar(30) DEFAULT NULL,
  `cp` varchar(5) DEFAULT NULL,
  `nota` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_direccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of direcciones_proveedores
-- ----------------------------

-- ----------------------------
-- Table structure for kardex
-- ----------------------------
DROP TABLE IF EXISTS `kardex`;
CREATE TABLE `kardex` (
  `id_kardex` int(11) NOT NULL AUTO_INCREMENT,
  `id_articulo` int(11) DEFAULT NULL,
  `cantidad` float DEFAULT NULL,
  `unidad` varchar(20) DEFAULT NULL,
  `id_movimiento` int(11) DEFAULT NULL,
  `tipomovimiento` varchar(20) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `notas` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_kardex`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of kardex
-- ----------------------------
INSERT INTO `kardex` VALUES ('1', '1', '47', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('2', '2', '113', 'PIEZAS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('3', '3', '47', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('4', '4', '113', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('5', '6', '76', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('6', '7', '33', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('7', '8', '337', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('8', '9', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('9', '10', '80', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('10', '11', '72', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('11', '12', '25', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('12', '13', '112', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('13', '14', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('14', '15', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('15', '16', '241', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('16', '17', '114', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('17', '18', '110', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('18', '19', '77', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('19', '20', '86', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('20', '21', '72', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('21', '22', '57', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('22', '23', '78', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('23', '24', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('24', '25', '6', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('25', '26', '67', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('26', '27', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('27', '28', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('28', '29', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('29', '30', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('30', '31', '13', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('31', '32', '66', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('32', '33', '142', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('33', '34', '181', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('34', '35', '48', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('35', '36', '116', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('36', '37', '101', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('37', '38', '30', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('38', '39', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('39', '40', '24', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('40', '41', '100', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('41', '42', '24', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('42', '43', '43', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('43', '44', '102', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('44', '45', '33', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('45', '46', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('46', '47', '90', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('47', '48', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('48', '49', '116', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('49', '50', '38', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('50', '51', '94', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('51', '52', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('52', '53', '69', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('53', '54', '21', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('54', '55', '58', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('55', '57', '115', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('56', '58', '31', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('57', '59', '100', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('58', '60', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('59', '61', '43', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('60', '62', '39', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('61', '63', '50', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('62', '64', '38', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('63', '68', '4', 'PLANCHA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('64', '69', '10', 'PLANCHA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('65', '70', '10', 'PLANCHA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('66', '71', '4', 'PLANCHA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('67', '74', '37', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('68', '76', '2', 'LT', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('69', '79', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('70', '80', '12', 'PZS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('71', '81', '10', 'PZS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('72', '82', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('73', '83', '17', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('74', '84', '5', 'PAR', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('75', '85', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('76', '86', '1', 'KGS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('77', '87', '2', 'GALON', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('78', '88', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('79', '89', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('80', '90', '2', 'PZS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('81', '91', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('82', '92', '24', 'ROLLO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('83', '93', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('84', '95', '18', 'ROLLO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('85', '96', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('86', '98', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('87', '100', '12', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('88', '101', '12', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('89', '102', '5', 'CAJA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('90', '107', '17', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('91', '108', '12', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('92', '109', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('93', '110', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('94', '111', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('95', '112', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('96', '113', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('97', '114', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('98', '115', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('99', '117', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('100', '118', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('101', '120', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('102', '121', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('103', '122', '75', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('104', '123', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('105', '124', '10', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('106', '125', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('107', '126', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('108', '127', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('109', '128', '5', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('110', '129', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('111', '130', '16', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('112', '131', '5', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('113', '132', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('114', '134', '290', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('115', '135', '5', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('116', '136', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('117', '137', '90', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('118', '138', '80', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('119', '150', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('120', '151', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('121', '153', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('122', '155', '24', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('123', '156', '24', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('124', '160', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('125', '163', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('126', '167', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('127', '168', '3', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('128', '169', '5', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('129', '170', '46', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('130', '171', '10', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('131', '172', '6', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('132', '173', '34', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('133', '174', '10', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('134', '176', '230', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('135', '177', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('136', '178', '5', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('137', '179', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('138', '180', '11', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('139', '181', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('140', '182', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('141', '183', '1', 'MILLAR', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('142', '184', '10', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('143', '185', '100', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('144', '187', '380', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('145', '191', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('146', '192', '8', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('147', '193', '18', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('148', '194', '24', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('149', '195', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('150', '196', '33', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('151', '197', '30', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('152', '198', '30', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('153', '199', '2', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('154', '200', '1', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('155', '202', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('156', '204', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('157', '206', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('158', '207', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('159', '208', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('160', '209', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('161', '210', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('162', '211', '10', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('163', '212', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('164', '213', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('165', '214', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('166', '215', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('167', '216', '20', 'KILOS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('168', '217', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('169', '218', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('170', '219', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('171', '220', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('172', '221', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('173', '222', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('174', '223', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('175', '224', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('176', '226', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('177', '227', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('178', '228', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('179', '229', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('180', '230', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('181', '231', '40', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('182', '232', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('183', '234', '10', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('184', '235', '10', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('185', '236', '10', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('186', '237', '10', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('187', '238', '20', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('188', '246', '10', 'LITROS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('189', '247', '400', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('190', '249', '15', 'LITROS', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('191', '250', '100', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('192', '251', '60', 'KILO', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('193', '252', '4', 'PIEZA', '11', 'ENTRADA', '1', '1', '2017-11-25 00:00:00', null, '');
INSERT INTO `kardex` VALUES ('194', '245', '-5', 'KILO', '9', 'SALIDA', '1', '1', null, null, 'SALIDA DE PRUEBA');
INSERT INTO `kardex` VALUES ('195', '245', '-5', 'KILO', '5', 'SALIDA', '1', '1', null, null, 'SALIDA DE PRUEBA');
INSERT INTO `kardex` VALUES ('196', '245', '-5', 'KILO', '5', 'SALIDA', '1', '1', null, null, 'SALIDA DE PRUEBA');
INSERT INTO `kardex` VALUES ('197', '245', '-5', 'KILO', '5', 'SALIDA', '1', '1', null, null, 'PRUEBA DE SALIDA');
INSERT INTO `kardex` VALUES ('198', '245', '52', 'KILO', '3', 'ENTRADA', '1', '1', null, null, 'PRUEBA DE ENTRADA');
INSERT INTO `kardex` VALUES ('199', '1', '-3', null, '5', 'SALIDA', '1', '1', null, null, 'ASDFSDG');

-- ----------------------------
-- Table structure for materiales
-- ----------------------------
DROP TABLE IF EXISTS `materiales`;
CREATE TABLE `materiales` (
  `id_material` int(11) NOT NULL AUTO_INCREMENT,
  `agrupador` char(25) DEFAULT NULL,
  `clave` char(30) DEFAULT NULL,
  `descripcion` char(100) DEFAULT NULL,
  `medida` varchar(20) DEFAULT NULL,
  `flauta` varchar(5) DEFAULT NULL,
  `especificacion` varchar(50) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_tipomaterial` int(11) DEFAULT NULL,
  `costo` decimal(19,4) DEFAULT NULL,
  `unidad` char(15) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  `id_cli-prov` int(11) DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  `num_orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_material`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of materiales
-- ----------------------------
INSERT INTO `materiales` VALUES ('1', '', 'CITO 0.4X0.8 CH', 'CITO DE 0.4X0.8MM CHANEL', '0.4 x 0.8 mm', '1', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('2', '', 'CITO 0.4X0.8 MM', 'CITO DYNAMIC 0.4X0.8 MM 35 MTS 50 TIRAS', '0.4 x 0.8 mm', '2', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZAS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('3', '', 'CITO 0.4X1.0 CH', 'CITO 0.4X1.0 MM CHANEL', '0.4 x 1.0 mm', '3', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('4', '', 'CITO 0.4X1.0 MM', 'CITO DYNAMIC 0.4X1.0 MM 35MTS 50 TIRAS', '0.4 x 1.0 mm', '4', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('5', '', 'CITO 0.4X1.0MM', 'CITO 0.4X1.0 MM CHANEL', '', '5', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('6', '', 'CITO 0.4X1.2', 'CITO DYNAMIC 0.4X1.2 MM 35 MTS 50 TIRAS', '0.4 x 1.2 mm', '6', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('7', '', 'CITO 0.4X1.2 CH', 'CITO 0.4X1.2 CHANEL', '0.4 x 1.2 mm', '7', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('8', '', 'CITO 0.4X1.3 CH', 'CITO CHANEL 0.4X1.3 CHANEL', '0.4 x 1.3 mm', '8', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('9', '', 'CITO 0.4X1.3 MM', 'CITO DYNAMIC 0.4X1.3MM 35 MTS 50 TIRAS', '0.4 x 1.3 mm', '9', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('10', '', 'CITO 0.4X1.4 CH', 'CITO 0.4X1.4 CHANEL', '0.4 x 1.4 mm', '10', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('11', '', 'CITO 0.4X1.4 MM', 'CITO DYNAMIC 0.4X1.4 35 MTS 50 TIRAS', '0.4 x 1.4 mm', '11', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('12', '', 'CITO 0.4X1.5 CH', 'CITO CHANEL 0.4X1.5 35 MTS 50 TIRAS', '', '12', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('13', '', 'CITO 0.4X1.5MM', 'CITO DYNAMIC 0.4X1.5MM 35 MTS 50 TIRAS', '0.4 x 1.5 mm', '13', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('14', '', 'CITO 0.4X1.7MM', 'CITO DYNAMIC 0.4X1.7MM 35 MTS 50 TIRAS', '', '14', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('15', '', 'CITO 0.4X1.9MM', 'CITO DYNAMIC 0.4X1.9MM 35 MTS 50 TIRAS', '', '15', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('16', '', 'CITO 0.4X2.7MM', 'CITO DYNAMIC 0.4X2.7 MM 35 MTS 50 TIRAS', '0.4 x 2.7 mm', '16', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('17', '', 'CITO 0.5X0.8 MM', 'CITO DYNAMIC 0.5X0.8MM 35 MTS 50 TIRAS', '0.5 x 0.8 mm', '17', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('18', '', 'CITO 0.5X1.0 MM', 'CITO DYNAMIC 0.5X1.0 35 MTS 50 TIRAS', '0.5 x 1.0 mm', '18', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('19', '', 'CITO 0.5X1.2 CH', 'CITO 0.5X1.2 CHANEL', '0.5 x 1.2 mm', '19', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('20', '', 'CITO 0.5X1.2 MM', 'CITO DYNAMIC 0.5X1.2MM 35 MTS 50 TIRAS', '0.5 x 1.2 mm', '20', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('21', '', 'CITO 0.5X1.3 CH', 'CITO 0.5X1.3 CHANEL', '0.5 x 1.3 mm', '21', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('22', '', 'CITO 0.5X1.3 MM', 'CITO DYNAMIC 0.5X1.3 35 MTS 50 TIRAS', '0.5 x 1.3 mm', '22', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('23', '', 'CITO 0.5X1.4 CH', 'CITO 0.5X1.4 CHANEL', '0.5 x 1.4 mm', '23', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('24', '', 'CITO 0.5X1.4 MM', 'CITO DYNAMIC 0.5X1.4 35 MTS 50 TIRAS', '0.5 x 1.4 mm', '24', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('25', '', 'CITO 0.5X1.5 CH', 'CITO 0.5X1.5 CHANEL 35 MTS 50 TIRAS', '', '25', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('26', '', 'CITO 0.5X1.5 MM', 'CITO DYNAMIC 0.5X1.5 35 MTS 50 TIRAS', '0.5 x 1.5 mm', '26', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('27', '', 'CITO 0.5X1.6 CH', 'CITO CHANEL 0.5X1.6 35 MTS 50 TIRAS', '', '27', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('28', '', 'CITO 0.5X1.6 MM', 'CITO DYNAMIC 0.5X1.6MM 35 MTS 50 TIRAS', '0.5 x 1.6 mm', '28', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('29', '', 'CITO 0.5X1.7 CH', 'CITO O.5X1.7 CHANEL', '0.5 x 1.7 mm', '29', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('30', '', 'CITO 0.5X1.7 MM', 'CITO DYNAMIC 0.5X1.7MM 35 MTS 50 TIRAS', '0.5 x 1.7 mm', '30', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('31', '', 'CITO 0.5X1.9 CH', 'CITO CHANEL 0.5X1.9', '', '31', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('32', '', 'CITO 0.5X1.9MM', 'CITO DYNAMIC 0.5X1.9MM 35 MTS 50 TIRAS', '0.5 x 1.9 mm', '32', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('33', '', 'CITO 0.5X2.1 MM', 'CITO DYNAMIC 0.5X2.1MM 35 MTS 50 TIRAS', '0.5 x 2.1 mm', '33', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('34', '', 'CITO 0.6X1.2 MM', 'CITO DYNAMIC 0.6X1.2 MM 35 MTS 50 TIRAS', '0.6 x 1.2 mm', '34', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('35', '', 'CITO 0.6X1.3 CH', 'CITO CHANEL 0.6X1.3', '', '35', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('36', '', 'CITO 0.6X1.3 MM', 'CITO DUNAMIC DE 0.6X1.3 MM 35 MYS 50 TIR', '0.6 x 1.3 mm', '36', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('37', '', 'CITO 0.6X1.5 MM', 'CITO DYNAMIC 0.6X1.5 35 MTS 50 TIRAS', '0.6 x 1.5 mm', '37', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('38', '', 'CITO 0.6X1.6 CH', 'CITO CHANEL 0.6X1.6 CHANEL', '', '38', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('39', '', 'CITO 0.6X1.6 MM', 'CITO DYNAMIC 0.6X1.6 35 MTS 50 TIRAS', '', '39', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('40', '', 'CITO 0.6X1.7 CH', 'CITO CHANEL 0.6X1.7 CHANEL', '', '40', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('41', '', 'CITO 0.6X1.7 MM', 'CITO DYNAMIC DE 0.6X1.7 35 MTS 50 TIRAS', '0.6 x 1.7 mm', '41', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('42', '', 'CITO 0.6X1.9 CH', 'CITO CHANEL 0.6X1.9', '', '42', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('43', '', 'CITO 0.6X1.9 MM', 'CITO DYNAMIC 0.6X1.9 35 MTS 50 TIRAS', '0.6 x 1.9 mm', '43', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('44', '', 'CITO 0.6X2.1MM', 'CITO DYMANIC DE 0.6X2.1MM 35 MTS CAJA 50', '0.6 x 2.1 mm', '44', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('45', '', 'CITO 0.6X2.3 CH', 'CITO CHANEL 0.6X2.3', '', '45', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('46', '', 'CITO 0.6X2.3 MM', 'CITO DYMANIC DE 0.6X2.3 MM 35 MTS CAJA 50', '', '46', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('47', '', 'CITO 0.6X2.5 CH', 'CITO CHANEL 0.6X2.5', '', '47', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('48', '', 'CITO 0.6X2.5 MM', 'CITO DYMANIC DE 0.6X2.5 MM 35 MTS CAJA 50', '', '48', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('49', '', 'CITO 0.6X2.7 MM', 'CITO DYNAMIC 0.6X2.7 35 MTS 50 TIRAS', '0.6 x 2.7 mm', '49', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('50', '', 'CITO 0.6X3.5 CH', 'CITO CHANEL 0.6X3.5', '', '50', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('51', '', 'CITO 0.6X3.5 MM', 'CITO DYNAMIC 0.6X3.5 MM', '', '51', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('52', '', 'CITO 0.8X2.7 CH', 'CITO CHANEL 0.8X2.7', '', '52', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('53', '', 'CITO 0.8X2.7 MM', 'CITO DYNAMIC 0.8X2.7M 35 MTS 50 TIRAS', '0.8 x 2.7 mm', '53', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('54', '', 'CITO 0.8X3.0 CH', 'CITO CHANEL 0.8X3.0', '', '54', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('55', '', 'CITO 0.8X3.0 MM', 'CITO DYNAMIC 0.8X3.0MM 35 MTS 50 TIRAS', '0.8 x 3.0 mm', '55', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('56', '', 'CITO 0.8X4.0 CH', 'CITO CHANEL 0.8X4.0', '', '56', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('57', '', 'CITO 0.8X4.0 MM', 'CITO DYNAMIC 0.8X4.0MM 35 MTS 50 TIRAS', '0.8 x 4.0 mm', '57', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('58', '', 'CITO 1.0 X3.0 CH', 'CITO 1.0X3.0 CHANEL', '0.0 x 3.0 mm', '58', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('59', '', 'CITO 1.0X3.0 MM', 'CITO DYNAMIC 1.0X3.0MM 35 MTS 50 TIRAS', '0.0 x 3.0 mm', '59', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('60', '', 'CITO 1.0X4.0 CH', 'CITO CHANEL 1.0X4.0', '', '60', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('61', '', 'CITO 1.0X4.0MM', 'CITO DYNAMIC DE 1.0X4.0MM 35MTS 50 PZAS', '0.0 x 4.0 mm', '61', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('62', '', 'CITO 1.2X4.0 CH', 'CITO CHANEL 1.2X4.0', '', '62', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('63', '', 'CITO 1.2X4.0 MM', 'CITO DYNAMIC 1.2X4.0 MM 35 MTS 50 PZAS', '0.2 x 4.0 mm', '63', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('64', '', 'CITO 1.2X4.5 MM', 'CITO DYNAMIC 1.2X4.5 MM', '', '64', '', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('65', '', 'CITO-0.4X1.5 CH', 'CITO CHANEL 0.4X1.5 35 MTS 50 TIRAS', '0.4 x 1.5 mm', '65', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('66', '', 'CITO-0.5X1.5 CH', 'CITO 0.5X1.5 CHANEL 35 MTS 50 TIRAS', '0.5 x 1.5 mm', '66', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('67', '', 'CITO-0.5X1.6 CH', 'CITO CHANEL 0.5X1.6 35 MTS 50 TIRAS', '0.5 x 1.6 mm', '67', '35 mts 50 tiras', '2', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('68', '', 'HU65-FES-3/8X3/8', 'HULE FESTONEADO NEGRO DE 3/8X3/8X18', '3/8 x 3/8 x 18', '68', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('69', '', 'HU80-3/8X3/8X18', 'HULE FESTONEADO ROJO 3/8X3/8X18 PARA MAD', '3/8 x 3/8 x 18', '69', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('70', '', 'HU80-7X1/4X18', 'HULE FESTONEADO ROJO DE 7MMX1/4X18 PARA', '7mm x 1/4 x 18', '70', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('71', '', 'HU-CAB-001', 'HULE NEGRO CUADROS PARA MADERA 7MM C/A', '', '71', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('72', '', 'HULE GRIS OPENCEL', 'HULE GRIS OPEN CELL', '', '72', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('73', '', 'HULE MEDIANIL', 'HULE MEDIANIL', '', '73', '', '3', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('74', '', 'HULE PERFIL', 'HULE PERFIL', '', '74', '', '3', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('75', '', 'HULE PLECA', 'HULE NEGRO PARA CORTE DE PLECA', '', '75', '', '3', '0', '0.0000', 'PLANCHA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('76', '', 'ACIDO MORIATICO', 'ACIDO MORIATICO', '', '76', '', '4', '0', '0.0000', 'LT', '1', null, '', null);
INSERT INTO `materiales` VALUES ('77', '', 'CUBETA 10-L', 'CUBETA 10 LITROS', '', '77', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('78', '', 'ESTOPA', 'ESTOPA', '', '78', '', '4', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('79', '', 'E-V', 'ESCOBA DE VINILO', '', '79', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('80', '', 'FIBRA VERDE', 'FIBRA SCOTH BRITE', '', '80', '', '4', '0', '0.0000', 'PZS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('81', '', 'FRANELAS', 'FRANELAS', '', '81', '', '4', '0', '0.0000', 'PZS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('82', '', 'GUANTE INDUSTRIAL AMARILLO', 'GUANTE INDUSTRIAL AMARILLO', '', '82', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('83', '', 'GUANTE INDUSTRIAL ROJO', 'GUANTE INDUSTRIAL ROJO', '', '83', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('84', '', 'GUANTES N-6', 'GUANTES No. 6', '', '84', '', '4', '0', '0.0000', 'PAR', '1', null, '', null);
INSERT INTO `materiales` VALUES ('85', '', 'HIPO', 'HIPOCLORITO', '', '85', '', '4', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('86', '', 'JABON EN POLVO', 'JABON EN POLVO CON 10 KGS', '', '86', '', '4', '0', '0.0000', 'KGS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('87', '', 'JABON PARA MANOS', 'JABON PARA MANOS', '', '87', '', '4', '0', '0.0000', 'GALON', '1', null, '', null);
INSERT INTO `materiales` VALUES ('88', '', 'JER-55CM', 'JERGA 55 CM', '', '88', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('89', '', 'LIM-MULTI', 'LIMPIADOR MULTIUSOS', '', '89', '', '4', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('90', '', 'MECHUDO', 'MUCHUDO', '', '90', '', '4', '0', '0.0000', 'PZS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('91', '', 'MOP-50CM', 'MOP PARA LIMPIEZA INDUSTRIAL', '', '91', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('92', '', 'PAPEL SANITARIO', 'ROLLO DE PAPEL SANITARIO', '', '92', '', '4', '0', '0.0000', 'ROLLO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('93', '', 'PAST-SANI', 'PASTILLA SANITARIA', '', '93', '', '4', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('94', '', 'RECOJEDOR', 'RECOJEDOR', '', '94', '', '4', '0', '0.0000', 'PZS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('95', '', 'TOALLAS DE PAPEL', 'TOALLAS DE PAPEL SANITARIO', '', '95', '', '4', '0', '0.0000', 'ROLLO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('96', '', 'AD-AQUAD PVC 200', 'ADHESIVO AQUAD PVC 200', '', '96', '', '5', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('97', '', 'AD-UNIVM 5435', 'ADHESIVO UNIVM 5435 PARA EMPALME', '', '97', '', '5', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('98', '', 'BLOCK COMPROBANTE', 'BLOCK COMPROBANTE DE GASTOS', '', '98', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('99', '', 'BOLIGRAFO BIC', 'PAQUETE DE BOLIGRAFO BIC PUNTO MEDIO CON', '', '99', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('100', '', 'BOLIGRAFO BIC AZUL', 'PAQUETE DE BOLIGRAFO BIC PUNTO MEDIO AZUL', '', '100', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('101', '', 'BOLIGRAFO BIC NEGRO', 'PAQUETE DE BOLIGRAFO BIC PUNTO MEDIO NEGRO', '', '101', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('102', '', 'BROCHE BACCO 8MM', 'BROCHE BACCO DE 8 MM', '', '102', '', '5', '0', '0.0000', 'CAJA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('103', '', 'CALCULADORA', 'CALCULADORA PRINTAFORM', '', '103', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('104', '', 'CARTUCHO HP 105', 'CARTUCHO HP CZ 105 NEGRO 662 XL', '', '104', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('105', '', 'CARTUCHO HP 106', 'CARTUCHO HP CZ 106 662 XL', '', '105', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('106', '', 'CHALECO REFLEJANTE', 'CHALECO REFLEJANTE', '', '106', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('107', '', 'CINTA 2 CARAS TUC', 'CINTA 2 CARAS DE 12X33 MTS TUCK', '', '107', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('108', '', 'CINTA CANELA', 'CINTA CANELA', '', '108', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('109', '', 'CINTA DIUREX 18X6', 'CINTA DIUREX 18X65 MM NAVITEK', '', '109', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('110', '', 'CLIPS N.1', 'CLIPS N.1 MARIPOSA', '', '110', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('111', '', 'CLIPS N.2', 'CAJA DE CLIPS ESTANDAR N.2', '', '111', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('112', '', 'COJIN PARA SELLO', 'COJIN PARA SELLO', '', '112', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('113', '', 'CORRECTOR PAPER', 'CORRECTOR PAPER MATE', '', '113', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('114', '', 'CUADERNO', 'CUADERNO PROFESIONAL', '', '114', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('115', '', 'CUTTER GRANDE', 'CUTTER OLFA GRANDE', '', '115', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('116', '', 'CUTTER OLFA A', 'CUTTER OLFA MODELO A CHICO', '', '116', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('117', '', 'DESP-DIUREX', 'DESPACHADOR DE DIUREX', '', '117', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('118', '', 'DIUREX 12X65', 'DIUREX DE 12X65', '', '118', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('119', '', 'DIUREX 18X33MM', 'DIUREX 18X33 MM', '', '119', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('120', '', 'DIUREX 24X65', 'CINTA DIUREX 24X65', '', '120', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('121', '', 'ENGRAPADORA', 'ENGRAPADORA', '', '121', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('122', '', 'FOLDER TAMAÑO CAR', 'PAQUETE DE FOLDER TAMAÑO CARTA COLOR CRE', '', '122', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('123', '', 'GRAPA ESTANDAR', 'GRAPA ESTANDAR PILOT', '', '123', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('124', '', 'LAPIZ MIRADO', 'LAPIZ MIRADO', '', '124', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('125', '', 'MARCA TEXTO AMARI', 'MARCA TEXTO AMARILLO', '', '125', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('126', '', 'MARCA TEXTO AZUL', 'MARCA TEXTO AZUL', '', '126', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('127', '', 'MARCA TEXTO FIUS', 'MARCA TEXTO FIUSHA', '', '127', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('128', '', 'MARCA TEXTO NARA', 'MARCA TEXTO NARANJA', '', '128', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('129', '', 'MARCA TEXTO VERD', 'MARCA TEXTO VERDE', '', '129', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('130', '', 'MARCADOR ESTERBRO', 'MARCADORES ESTERBROOK PAQUETE CON 12 PIE', '', '130', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('131', '', 'MARCADOR SINGAL', 'PAQUETE DE MARCADOR SINGAL DUO CON 12 PI', '', '131', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('132', '', 'MASKING 18X50', 'MASKING TAPE 18X50', '', '132', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('133', '', 'MASKING T 18X65', 'MASKING TAPE DE 18MMX65MM', '', '133', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('134', '', 'PAPEL BOND 70X95', 'PAPEL BOND DE 70X95  75GMS X250 HOJAS', '70x95', '134', '75 grs 250 hojas', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('135', '', 'PAPEL BOND CARTA', 'PAQUETE DE PAPEL BOND TAMAÑO CARTA CON 5', '', '135', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('136', '', 'PAPEL BOND OFICIO', 'PAQUETE DE PAPEL BOND TAMAÑO OFICIO CON 5', '', '136', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('137', '', 'PAPEL CARBON', 'PAPEL CARBON DE 66X100 PAQ. C-1000', '66x100', '137', '1000 hojas', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('138', '', 'PAPEL MICRO', 'PAPEL MICRO DE 105X108', '105x108', '138', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('139', '', 'PLAYERA NARANJA CH', 'PLAYERA NARANJA CH', '', '139', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('140', '', 'PLAYERA NARANJA GD', 'PLAYERA NARANJA GD', '', '140', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('141', '', 'PLAYERA NARANJA MD', 'PLAYERA NARANJA MD', '', '141', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('142', '', 'PLAYERA POLO AZUL GD', 'PLAYERA POLO AZUL GD', '', '142', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('143', '', 'PLAYERA POLO AZUL MD', 'PLAYERA POLO AZUL MD', '', '143', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('144', '', 'PLAYERA POLO GRIS CH', 'PLAYERA POLO GRIS CH', '', '144', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('145', '', 'PLAYERA POLO GRIS GD', 'PLAYERA POLO GRIS GD', '', '145', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('146', '', 'PLAYERA POLO GRIS MD', 'PLAYERA POLO GRIS MD', '', '146', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('147', '', 'PLAYERA POLO NEGRA CH', 'PLAYERA POLO NEGRA CH', '', '147', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('148', '', 'PLAYERA POLO NEGRA GD', 'PLAYERA POLO NEGRA GD', '', '148', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('149', '', 'PLAYERA POLO NEGRA MD', 'PLAYERA POLO NEGRA MD', '', '149', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('150', '', 'POST IT CHICO', 'POST IT CHICO', '', '150', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('151', '', 'POST IT GRANDE', 'POST IT GRANDE', '', '151', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('152', '', 'PRITT', 'RESISTOL PRITT', '', '152', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('153', '', 'REGISTRADOR', 'REGISTRADOR TAMAÑO CARTA PARA ARCHIVAR', '', '153', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('154', '', 'REGLA', 'REGLA DE 30 CM', '', '154', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('155', '', 'REPUESTO OLFA AB', 'REPUESTO DE NAVAJA OLFA AB PARA CUTTER C', '', '155', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('156', '', 'REPUESTO OLFA LB1', 'REPUESTO DE NAVAJA OLFA LB-10 PARA CUTTE', '', '156', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('157', '', 'SACAPUNTAS', 'SACAPUNTAS', '', '157', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('158', '', 'SOBRE NOMINA', 'SOBRE PARA NOMINA CON 100 PIEZAS', '', '158', '100 pzas', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('159', '', 'SOBRE TAMAÑO CART', 'SOBRE TAMAÑO CARTA PAQUETE CON 25 PIEZAS', '', '159', '25 pzas', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('160', '', 'TABLA SUJETA PAPE', 'TABLETA SUJETA PAPEL TAMAÑO CARTA DE MAD', '', '160', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('161', '', 'TARJETAS MOD.T2-A', 'MILLAR DE TARJETAS MODELO T2-A', '', '161', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('162', '', 'TIJERA PILOT', 'TIJERA PILOT 11-6', '', '162', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('163', '', 'TONER CANON E-120', 'TONER CANON E-120 PARA MULTIFUNCIONAL', '', '163', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('164', '', 'TONER HP305A AMARILLO', 'TONER HP305A AMARILLO', '', '164', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('165', '', 'TONER HP305A CIAN', 'TONER HP305A CIAN', '', '165', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('166', '', 'TONER HP305A MAGENTA', 'TONER HP305A MAGENTA', '', '166', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('167', '', 'TONER HP305A NEGRO', 'TONER HP305A NEGRO', '', '167', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('168', '', 'UÑAS', 'UÑAS QUITA GRAPAS', '', '168', '', '5', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('169', '', 'ALAMBRE P/GRAPA', 'ALAMBRE PARA GRAPAS 4.5KILOS POR ROLLO', '', '169', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('170', '', 'ARANDELA', 'GOMA PARA EL CHUPADOR', '', '170', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('171', '', 'BGUYGDNG03', 'DISCO .3', '', '171', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('172', '', 'BGUYGDNG05', 'DISCO .5', '', '172', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('173', '', 'BGUYGDNG07', 'DISCO .7', '', '173', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('174', '', 'BGUYGDNG09', 'DISCO .9', '', '174', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('175', '', 'COFIAS', 'CIENTO DE COFIAS', '', '175', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('176', '', 'CUBREBOCAS', 'CIENTO DE CUBREBOCAS', '', '176', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('177', '', 'DW-40', 'LUBRICANTE WD40 AFLOJA TODO', '', '177', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('178', '', 'FAJAS DE CUERO', 'FAJAS DE CUERO', '', '178', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('179', '', 'FLEJE 3/8 MANUAL', 'FLEJE NEGRO 3/8 MANUAL', '', '179', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('180', '', 'FLEJE-3/8 SEMI', 'FLEJE 3/8 NEGRO ARA MAQUINA SEMIAUTOMATI', '', '180', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('181', '', 'FLEJE-3/8 SEMI BCO', 'FLEJE 3/8 BLANCO ARA MAQUINA SEMIAUTOMATI', '', '181', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('182', '', 'FLEXO', 'FLEXOMETRO 3 MTS', '', '182', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('183', '', 'GRAPA-EMP', 'GRAPA PARA EMPALME', '', '183', '', '6', '0', '0.0000', 'MILLAR', '1', null, '', null);
INSERT INTO `materiales` VALUES ('184', '', 'GUANTE ALGODON', 'GUANTE DE ALGODON PARA AREA DE SUAJE', '', '184', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('185', '', 'GUANTE LATEX', 'GUANTE LATEX', '', '185', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('186', '', 'JUEGO ASA AMARILL', 'JUEGO DE ASA PARA CAJA AMARILLO', '', '186', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('187', '', 'JUEGO ASA BLANCA', 'JUEGO DE ASA PARA CAJA BLANCA', '', '187', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('188', '', 'LEN-SEG', 'LENTES DE SEGURIDAD', '', '188', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('189', '', 'LIGA NATURAL N.18', 'LIGA NATURAL VALMAR N.18 POR KILO A GRAN', '', '189', '', '6', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('190', '', 'PELICULA 20\"', 'PELICULA POLYSTRECH 20\"', '', '190', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('191', '', 'POLIESTRECH 18\"', 'PELICULA POLIESTRECH DE 18\" 28 KILOS POR', '', '191', '', '6', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('192', '', 'PROFITAPE AMARILL', 'CINTA PROFITAPE 80 MIC X 6 MM AMARILLO', '', '192', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('193', '', 'PROFITAPE AZUL', 'CINTA PROFITAPE 40 MIC X 6 MM AZUL', '', '193', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('194', '', 'PROFITAPE ROJA', 'CINTA PROFITAPE 60 MIC X 6 MM ROJA', '', '194', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('195', '', 'RAFIA', 'RAFIA NATURAL CAL.8', '', '195', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('196', '', 'TAPON AUDITIBO 3M', 'TAPON AUDITIVO 3M', '', '196', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('197', '', 'TARIMAS-120*100', 'TARIMAS RECICLADAS 120*100', '120x100', '197', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('198', '', 'TARIMAS-60*80', 'TARIMAS RECICLADAS 60*80', '60x80', '198', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('199', '', 'TRAPO INDUSTRIAL', 'TRAPO INDUSTRIAL', '', '199', '', '6', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('200', '', 'ANTIESPUMANTE', 'ANTIESPUMANTE PARA TINTAS', '', '200', '', '7', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('201', '', 'FLEXOWASH', 'SHAMPOO PARA FLEXO', '', '201', '', '7', '0', '0.0000', 'GALON', '1', null, '', null);
INSERT INTO `materiales` VALUES ('202', '', 'TI-AMAR-GCMI 10', 'TINTA AMARILLO GCMI 10', '', '202', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('203', '', 'TI-AMAR-GCMI11', 'TINTA AMARILLA GCMI-11 WARD PROFLEX 220', '', '203', '', '7', '0', '0.0000', 'KILOS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('204', '', 'TI-AZ-GCMI 388', 'TINTA AZUL GCMI 388 PROFLEX H2O', '', '204', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('205', '', 'TI-AZ-GCMI 9002', 'TINTA AZUL GCMI 9002', '', '205', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('206', '', 'TI-AZ-GCMI3086', 'TINTA AZUL GCMI 3086', '', '206', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('207', '', 'TI-AZ-GCMI3229', 'TINTA AZUL GCMI 3229', '', '207', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('208', '', 'TI-AZ-GCMI394', 'TINTA AZUL GCMI394', '', '208', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('209', '', 'TI-AZ-GCMIREFLEX', 'TINTA AZUL GCMI REFLEX', '', '209', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('210', '', 'TI-AZ-PMS281U', 'TINTA AZUL PMS 281U ACRIFLEX', '', '210', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('211', '', 'TI-AZU-GCMI 30', 'TINTA AZUL GCMI 30', '', '211', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('212', '', 'TI-AZU-GCMI 300', 'TINTA AZUL GCMI 300', '', '212', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('213', '', 'TI-AZU-GCMI 305C', 'TINTA AZUL GCMI 305C', '', '213', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('214', '', 'TI-AZU-GCMI 38', 'TINTA AZUL GCMI 38', '', '214', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('215', '', 'TI-AZU-GCMI 387', 'TINTA AZUL GCMI 387', '', '215', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('216', '', 'TI-AZUL-3005', 'TINTA AZUL PMS 3005 U CARTONFLEX', '', '216', '', '7', '0', '0.0000', 'KILOS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('217', '', 'TI-AZU-PANTONE 3125', 'TINTA AZUL PANTONE 3125', '', '217', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('218', '', 'TI-BCO-GCMI 91', 'TINTA BLANCO GCMI 91', '', '218', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('219', '', 'TI-CAF-GCMI50', 'TINTA CAFE GCMI 50', '', '219', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('220', '', 'TI-GRIS-GCMI 432', 'TINTA GRIS GCMI 432 (9002) CARTON FLEX', '', '220', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('221', '', 'TI-GRIS-GCMI 970', 'TINTA GRIS GCMI 970', '', '221', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('222', '', 'TI-MAG-GCMI 246', 'TINTA MAGENTA GCMI 246', '', '222', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('223', '', 'TI-MAG-GCMI 49', 'TINTA MAGENTA GCMI 49', '', '223', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('224', '', 'TI-NAR-GCMI80', 'TINTA NARANJA GCMI 80', '', '224', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('225', '', 'TI-NAR-GCMI81', 'TINTA NARANJA GCMI 81', '', '225', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('226', '', 'TI-NEG-GCMI90', 'TINTA NEGRA GCMI 90', '', '226', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('227', '', 'TINTA PARA COJIN', 'TINTA PARA COJIN COLOR NEGRO', '', '227', '', '7', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('228', '', 'TI-PURP-PMS 2395-U', 'TINTA PURPURA PMS 2395-U', '', '228', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('229', '', 'TI-RO-GCMI 73', 'TINTA GCMI 73 ROJO', '', '229', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('230', '', 'TI-RO-GCMI 74', 'TINTA ROJO GCMI 74', '', '230', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('231', '', 'TI-ROJ-GCMI75', 'TINTA ROJO GCMI 75', '', '231', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('232', '', 'TI-ROJO-GMCI 76', 'TINTA FLEXO ROJO GMCI 76', '', '232', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('233', '', 'TI-ROS-GCMILIV', 'TINTA ROSA GCMI LIVERPOOL', '', '233', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('234', '', 'TI-VER-GCMI20', 'TINTA VERDE GCMI 20', '', '234', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('235', '', 'TI-VER-GCMI2081', 'TINTA VERDE GCMI 2081', '', '235', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('236', '', 'TI-VER-GCMI24', 'TINTA VERDE GCMI 24', '', '236', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('237', '', 'TI-VER-PAN 575', 'TINTA VERDE PAN 575', '', '237', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('238', '', 'TI-VER-PMS 326', 'TINTA VERDE PMS 326-U CARTONFLEX', '', '238', '', '7', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('239', '', 'AD-AQUA-SULF 53', 'ADHESIVO AQUA PARA SULFATADA 53', '', '239', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('240', '', 'ADHESIVO S-2160T', 'ADHESIVO S-2160T PARA EMPALME', '', '240', '', '8', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('241', '', 'ADHESIVO V-3414', 'ADHESIVO V-3414 PARA EMPALMADORA', '', '241', '', '8', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('242', '', 'ADHESIVO-S2904', 'ADHESIVO 2-2904 PARA MAQUINA DE EMPALME', '', '242', '', '8', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('243', '', 'ADHESIVO-U5402', 'ADHESIVO U-5402 PARA MAQUINA DE EMPALME', '', '243', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('244', '', 'ADHESIVO-V3414', 'ADHESIVO 1-3414 PARA MAQUINA DE EMPALME', '', '244', '', '8', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('245', '', 'AD-OLOMEX-10', 'ADHESIVO OLOMEX 10', '', '', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('246', '', 'ANTICONGELANTE', 'ANTICONGELANTE', '', '246', '', '8', '0', '0.0000', 'LITROS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('247', '', 'RESISTOL CJAS', 'RESISTOL G-1171 PARA CAJA CORRUGADA UNIVM5298', '', '247', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('248', '', 'SULFAT 53', 'AQUAD SULFAT 53 ADHESIVO PARA CARTULINA', '', '248', '', '8', '0', '0.0000', 'PIEZA', '1', null, '', null);
INSERT INTO `materiales` VALUES ('249', '', 'THINNER', 'THINNER', '', '249', '', '8', '0', '0.0000', 'LITROS', '1', null, '', null);
INSERT INTO `materiales` VALUES ('250', '', 'TILMEX 1126', 'ADHESIVO TILMEX 1126 PARA SISTEMA DE INY', '', '250', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('251', '', 'TILMEX 1129', 'ADHESIVO TILMEX 1129 PARA DISCO', '', '251', '', '8', '0', '0.0000', 'KILO', '1', null, '', null);
INSERT INTO `materiales` VALUES ('252', '', 'PAPEL KRAFT 35 KGS', 'ROLLO PAPEL KRAFT CON 35 KGS', '', '252', '', '9', '0', '0.0000', 'PIEZA', '1', null, '', null);

-- ----------------------------
-- Table structure for ordenes_compra
-- ----------------------------
DROP TABLE IF EXISTS `ordenes_compra`;
CREATE TABLE `ordenes_compra` (
  `id_ordencompra` int(11) NOT NULL AUTO_INCREMENT,
  `id_proveedor` int(11) DEFAULT NULL,
  `id_ordenprod` int(11) DEFAULT NULL,
  `fecha_emision` timestamp NULL DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `id_direntrega` int(11) DEFAULT NULL,
  `estatus_almacen` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `estatus_pago` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_estatusorden` int(11) DEFAULT NULL,
  `importe` double DEFAULT NULL,
  `tipo_entrega` varchar(30) COLLATE utf32_spanish_ci DEFAULT NULL,
  `notas` varchar(255) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `fecha_actualizacion` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ordencompra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of ordenes_compra
-- ----------------------------

-- ----------------------------
-- Table structure for ordenes_produccion
-- ----------------------------
DROP TABLE IF EXISTS `ordenes_produccion`;
CREATE TABLE `ordenes_produccion` (
  `id_ordenproduccion` int(11) NOT NULL AUTO_INCREMENT,
  `id_cotizacion` int(11) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_ordencompra` int(11) DEFAULT NULL,
  `id_ordenmaterial` int(11) DEFAULT NULL,
  `nombre_trabajo` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `fecha_emision` datetime DEFAULT NULL,
  `fecha_requeridaentrega` datetime DEFAULT NULL,
  `fecha_ultactualizacion` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `id_estatusorden` int(11) DEFAULT NULL,
  `tipo_orden` varchar(20) COLLATE utf32_spanish_ci DEFAULT NULL COMMENT 'cajas o maquilas o manual',
  `notas` varchar(255) COLLATE utf32_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_ordenproduccion`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of ordenes_produccion
-- ----------------------------
INSERT INTO `ordenes_produccion` VALUES ('1', null, null, null, null, null, null, null, null, '2017-11-20 11:15:43', '4', null, null);
INSERT INTO `ordenes_produccion` VALUES ('2', null, null, null, null, null, null, null, null, '2017-11-20 11:15:43', '4', null, null);
INSERT INTO `ordenes_produccion` VALUES ('3', '12324', '0', null, '13241', '13213', 'nombre trabajo', null, null, '2017-11-20 11:15:43', '4', null, '');
INSERT INTO `ordenes_produccion` VALUES ('4', '12324', '0', null, '13241', '13213', 'nombre trabajo', null, null, '2017-11-20 11:15:43', '4', null, '');
INSERT INTO `ordenes_produccion` VALUES ('5', '0', '0', null, '0', '0', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-11-20 11:15:44', '4', null, '');
INSERT INTO `ordenes_produccion` VALUES ('6', '0', '0', null, '0', '0', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-11-20 11:15:45', '4', null, '');
INSERT INTO `ordenes_produccion` VALUES ('7', '0', '0', null, '0', '0', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2017-11-20 11:15:35', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('8', '0', '0', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-01 00:00:00', '2017-11-20 11:15:37', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('9', '12124421', '0', null, '1323', '13131', 'nombre de trabajosuperimportate', '2017-11-20 00:00:00', '2017-11-29 00:00:00', '2017-11-20 11:15:37', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('10', '12124421', '1233234', null, '1323', '13131', 'nombre de trabajosuperimportate', '2017-11-20 00:00:00', '2017-11-29 00:00:00', null, '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('11', '12124421', '1233234', null, '1323', '13131', 'nombre de trabajosuperimportate', '2017-11-20 00:00:00', '2017-11-29 00:00:00', null, '1', null, 'nonohkhhj');
INSERT INTO `ordenes_produccion` VALUES ('12', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('13', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('14', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('15', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('16', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('17', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('18', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('19', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('20', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('21', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('22', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('23', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', '2017-11-20 11:15:48', '3', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('24', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', '2017-11-20 11:15:48', '3', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('25', '1242215', '212124', null, '121244', '23123', 'trabajo muy importante', '2017-11-20 00:00:00', '2017-11-06 00:00:00', null, '1', null, 'nots');
INSERT INTO `ordenes_produccion` VALUES ('26', '0', '0', null, '0', '0', 'prueba orden de produccion', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:08', '1', null, 'PRUEBA DE ORDEN');
INSERT INTO `ordenes_produccion` VALUES ('27', '0', '1', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:09', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('28', '0', '9', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:10', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('29', '0', '9', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:11', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('30', '0', '9', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:11', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('31', '0', '9', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:12', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('32', '0', '0', null, '0', '0', '', '2017-11-20 00:00:00', '2017-11-26 00:00:00', '2017-11-20 13:35:13', '1', null, '');
INSERT INTO `ordenes_produccion` VALUES ('33', '232', '33', null, '0', '0', 'ALSKJASLKJLKSDL', '2017-11-28 00:00:00', '2017-11-30 00:00:00', null, '1', null, 'PRUEBA');

-- ----------------------------
-- Table structure for procesos_pendientes
-- ----------------------------
DROP TABLE IF EXISTS `procesos_pendientes`;
CREATE TABLE `procesos_pendientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_orden` int(11) DEFAULT NULL,
  `nombre_trabajo` varchar(100) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_maquina` int(11) DEFAULT NULL,
  `nombre_maquina` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_proceso` int(11) DEFAULT NULL,
  `nombre_proceso` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `cant_requerida` int(11) DEFAULT NULL,
  `fechahora_registro` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of procesos_pendientes
-- ----------------------------
INSERT INTO `procesos_pendientes` VALUES ('1', '2', 'PRUEBA ORDEN 2', '8', 'SUAJADORA QUIJADA 1', '1', 'SUAJADO', '1500', '2017-11-17 18:12:23');
INSERT INTO `procesos_pendientes` VALUES ('3', '2', 'PRUEBA ORDEN 2', '12', 'PEGADORA LINEAL CHICA', '2', 'PEGADO', '1500', '2017-11-17 18:12:23');
INSERT INTO `procesos_pendientes` VALUES ('5', '2', 'PRUEBA ORDEN 2', '2', 'REFILADORA', '5', 'RAYADO', '1500', '2017-11-18 04:26:28');
INSERT INTO `procesos_pendientes` VALUES ('6', '0', 'PRUEBA ORDEN 2', '9', 'SUAJADORA QUIJADA 2', '1', 'SUAJADO', '1500', '2017-11-18 12:09:33');
INSERT INTO `procesos_pendientes` VALUES ('7', '0', 'PRUEBA ORDEN 2', '4', 'PEGADORA CORRUGADOS', '3', 'PEGADO CAJAS', '1500', '2017-11-18 12:09:39');

-- ----------------------------
-- Table structure for proveedores
-- ----------------------------
DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE `proveedores` (
  `id_proveedores` int(11) NOT NULL AUTO_INCREMENT,
  `rcomercial` char(50) NOT NULL,
  `rsocial` char(50) DEFAULT NULL,
  `calle` char(50) DEFAULT NULL,
  `colonia` char(50) DEFAULT NULL,
  `municipio` char(50) DEFAULT NULL,
  `ciudad` char(20) DEFAULT NULL,
  `estado` char(20) DEFAULT NULL,
  `cp` int(11) DEFAULT NULL,
  `rfc` char(13) DEFAULT NULL,
  `telefono` decimal(18,0) DEFAULT NULL,
  `pagweb` char(50) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  `condpago` char(40) DEFAULT NULL,
  `diasrevision` char(30) DEFAULT NULL,
  `contacto1` char(40) NOT NULL,
  `mailcont1` char(40) DEFAULT NULL,
  `refcont1` char(20) DEFAULT NULL,
  `contacto2` char(40) DEFAULT NULL,
  `mailcont2` char(40) DEFAULT NULL,
  `refcont2` char(20) DEFAULT NULL,
  `contacto3` char(40) DEFAULT NULL,
  `mailcont3` char(40) DEFAULT NULL,
  `refcont3` char(20) DEFAULT NULL,
  PRIMARY KEY (`id_proveedores`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of proveedores
-- ----------------------------

-- ----------------------------
-- Table structure for tipos_cajas
-- ----------------------------
DROP TABLE IF EXISTS `tipos_cajas`;
CREATE TABLE `tipos_cajas` (
  `Id` int(11) NOT NULL,
  `Descripcion` varchar(80) DEFAULT NULL,
  `Clasificacion` varchar(50) DEFAULT NULL,
  `Clasificacion2` varchar(50) DEFAULT NULL,
  `Refilado` tinyint(4) DEFAULT NULL,
  `Rayado` tinyint(4) DEFAULT NULL,
  `FlexoRanurado` tinyint(4) DEFAULT NULL,
  `Caiman` tinyint(4) DEFAULT NULL,
  `Pegado` tinyint(4) DEFAULT NULL,
  `Grapado` tinyint(4) DEFAULT NULL,
  `Autoarmado` tinyint(4) DEFAULT NULL,
  `Flejado` tinyint(4) DEFAULT NULL,
  `Entarimado` tinyint(4) DEFAULT NULL,
  `Impresion` tinyint(4) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_cajas
-- ----------------------------
INSERT INTO `tipos_cajas` VALUES ('1', 'RANURADA ESTANDAR A LA MEDIDA FLEXO PEGADA', 'CAJAS SIN IMPRESION', '> 700', null, null, '1', null, '1', null, null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('2', 'RANURADA ESTANDAR A LA MEDIDA FLEXO GRAPADA', 'CAJAS SIN IMPRESION', '> 700', null, null, '1', null, null, '1', null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('3', 'RANURADA ESTANDAR  A LA MEDIDA CAIMAN (MENOS DE 13 CM EN FONDO) PEGADA', 'CAJAS SIN IMPRESION', '> 700', null, null, null, '1', '1', null, null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('4', 'RANURADA ESTANDAR  A LA MEDIDA CAIMAN (MENOS DE 13 CM EN FONDO) GRAPADA', 'CAJAS SIN IMPRESION', '> 700', null, null, null, '1', null, '1', null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('5', 'AUTOARMADA A LA MEDIDA ', 'CAJAS SIN IMPRESION', '> 700', null, null, null, null, null, null, '1', '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('6', 'RANURADA ESTANDAR REFILADA FLEXO PEGADA', 'CAJAS SIN IMPRESION', '<= 700', '1', '1', '1', null, '1', null, null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('7', 'RANURADA ESTANDAR REFILADA FLEXO GRAPADA', 'CAJAS SIN IMPRESION', '<= 700', '1', '1', '1', null, null, '1', null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('8', 'RANURADA ESTANDAR REFILADA CAIMAN (MENOS DE 13 CM EN FONDO) PEGADA', 'CAJAS SIN IMPRESION', '<= 700', '1', '1', null, '1', '1', null, null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('9', 'RANURADA ESTANDAR REFILADA CAIMAN (MENOS DE 13 CM EN FONDO) GRAPADA', 'CAJAS SIN IMPRESION', '<= 700', '1', '1', null, '1', null, '1', null, '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('10', 'AUTOARMADA REFILADA', 'CAJAS SIN IMPRESION', '<= 700', '1', null, null, null, null, null, '1', '1', '1', null, '1');
INSERT INTO `tipos_cajas` VALUES ('11', 'RANURADA ESTANDAR A LA MEDIDA FLEXO PEGADA', 'CAJAS CON IMPRESION', '> 700', null, null, '1', null, '1', null, null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('12', 'RANURADA ESTANDAR A LA MEDIDA FLEXO GRAPADA', 'CAJAS CON IMPRESION', '> 700', null, null, '1', null, null, '1', null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('13', 'RANURADA ESTANDAR  A LA MEDIDA CAIMAN (MENOS DE 13 CM EN FONDO) PEGADA', 'CAJAS CON IMPRESION', '> 700', null, null, '1', '1', '1', null, null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('14', 'RANURADA ESTANDAR  A LA MEDIDA CAIMAN (MENOS DE 13 CM EN FONDO) GRAPADA', 'CAJAS CON IMPRESION', '> 700', null, null, '1', '1', null, '1', null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('15', 'AUTOARMADA A LA MEDIDA ', 'CAJAS CON IMPRESION', '> 700', null, null, null, null, null, null, '1', '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('16', 'RANURADA ESTANDAR REFILADA FLEXO PEGADA', 'CAJAS CON IMPRESION', '<= 700', '1', '1', '1', null, '1', null, null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('17', 'RANURADA ESTANDAR REFILADA FLEXO GRAPADA', 'CAJAS CON IMPRESION', '<= 700', '1', '1', '1', null, null, '1', null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('18', 'RANURADA ESTANDAR REFILADA CAIMAN (MENOS DE 13 CM EN FONDO) PEGADA', 'CAJAS CON IMPRESION', '<= 700', '1', '1', '1', '1', '1', null, null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('19', 'RANURADA ESTANDAR REFILADA CAIMAN (MENOS DE 13 CM EN FONDO) GRAPADA', 'CAJAS CON IMPRESION', '<= 700', '1', '1', '1', '1', null, '1', null, '1', '1', '1', '1');
INSERT INTO `tipos_cajas` VALUES ('20', 'AUTOARMADA REFILADA', 'CAJAS CON IMPRESION', '<= 700', '1', null, null, null, null, null, '1', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for tipos_camiones
-- ----------------------------
DROP TABLE IF EXISTS `tipos_camiones`;
CREATE TABLE `tipos_camiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  `costo_viaje` float DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of tipos_camiones
-- ----------------------------
INSERT INTO `tipos_camiones` VALUES ('1', 'FORD', '4000', '2000', '1');
INSERT INTO `tipos_camiones` VALUES ('2', 'ISUZU', '6000', '2500', '1');
INSERT INTO `tipos_camiones` VALUES ('3', 'KODIAK', '8000', '3000', '1');

-- ----------------------------
-- Table structure for tipos_cartones_nousar
-- ----------------------------
DROP TABLE IF EXISTS `tipos_cartones_nousar`;
CREATE TABLE `tipos_cartones_nousar` (
  `id_tipocarton` int(11) NOT NULL,
  `descripcion` varchar(60) DEFAULT NULL,
  `especificacion` varchar(50) DEFAULT NULL,
  `clasificacion` varchar(50) DEFAULT NULL,
  `costo` decimal(19,4) DEFAULT NULL,
  `descripcompleta` varchar(100) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tipocarton`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_cartones_nousar
-- ----------------------------
INSERT INTO `tipos_cartones_nousar` VALUES ('1', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC', '33 ECT', 'Doble', '11.5300', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC 33 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('2', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC', '42 ECT', 'Doble', '13.4620', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC 42 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('3', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC', '48 ECT', 'Doble', '14.5740', 'DOBLE CORRUGADO BLANCO-KRAFT FLAUTA BC 48 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('4', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '35 ECT ', 'Doble', '10.8900', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 35 ECT ', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('5', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '36 ECT', 'Doble', '10.4190', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 36 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('6', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '39 ECT', 'Doble', '11.1200', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 39 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('7', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '42 ECT', 'Doble', '12.5840', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 42 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('8', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '46 ECT ', 'Doble', '13.9500', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 46 ECT ', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('9', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '48 ECT', 'Doble', '14.1330', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 48 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('10', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '51 ECT', 'Doble', '14.6910', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 51 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('11', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '52 ECT ', 'Doble', '15.9000', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 52 ECT ', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('12', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC', '61 ECT', 'Doble', '16.7220', 'DOBLE CORRUGADO KRAFT-KRAFT FLAUTA BC 61 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('13', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '20 ECT ', 'Sencillo', '6.1100', 'CORRUGADO KRAFT-KRAFT FLAUTA C 20 ECT ', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('14', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '21 ECT', 'Sencillo', '6.5100', 'CORRUGADO KRAFT-KRAFT FLAUTA C 21 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('15', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '23 ECT', 'Sencillo', '7.9600', 'CORRUGADO KRAFT-KRAFT FLAUTA C 23 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('16', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '26 ECT', 'Sencillo', '8.1900', 'CORRUGADO KRAFT-KRAFT FLAUTA C 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('17', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '29 ECT', 'Sencillo', '9.1500', 'CORRUGADO KRAFT-KRAFT FLAUTA C 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('18', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '32 ECT', 'Sencillo', '9.6300', 'CORRUGADO KRAFT-KRAFT FLAUTA C 32 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('19', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '35 ECT ', 'Sencillo', '10.6300', 'CORRUGADO KRAFT-KRAFT FLAUTA C 35 ECT ', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('20', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '36 ECT', 'Sencillo', '10.4000', 'CORRUGADO KRAFT-KRAFT FLAUTA C 36 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('21', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '40 ECT', 'Sencillo', '12.8380', 'CORRUGADO KRAFT-KRAFT FLAUTA C 40 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('22', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '44 ECT', 'Sencillo', '13.2220', 'CORRUGADO KRAFT-KRAFT FLAUTA C 44 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('23', 'CORRUGADO KRAFT-KRAFT FLAUTA C', '55 ECT', 'Sencillo', '12.3900', 'CORRUGADO KRAFT-KRAFT FLAUTA C 55 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('24', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '23 ECT', 'Sencillo', '8.7400', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 23 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('25', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '26 ECT', 'Sencillo', '9.0500', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('26', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '29 ECT', 'Sencillo', '9.6560', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('27', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '32 ECT', 'Sencillo', '10.6820', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 32 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('28', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '36 ECT', 'Sencillo', '13.6400', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 36 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('29', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B', '40 ECT', 'Sencillo', '13.2430', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA B 40 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('30', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '23 ECT', 'Sencillo', '8.7400', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 23 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('31', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '26 ECT', 'Sencillo', '10.1200', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('32', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '29 ECT', 'Sencillo', '10.6000', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('33', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '32 ECT', 'Sencillo', '11.0800', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 32 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('34', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '36 ECT', 'Sencillo', '13.6400', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 36 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('35', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C', '40 ECT', 'Sencillo', '13.2430', 'CORRUGADO SENCILLO BLANCO-KRAFT FLAUTA C 40 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('36', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B', '21 ECT', 'Sencillo', '6.4130', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B 21 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('37', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B', '23 ECT', 'Sencillo', '7.2270', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B 23 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('38', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B', '26 ECT', 'Sencillo', '7.8650', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('39', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B', '29 ECT', 'Sencillo', '8.5030', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('40', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B', '32 ECT', 'Sencillo', '8.8680', 'CORRUGADO SENCILLO KRAFT-KRAFT FLAUTA B 32 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('41', 'MICROCORRUGADO BLANCO-KRAFT FLAUTA E', '26 ECT', 'Sencillo', '9.2100', 'MICROCORRUGADO BLANCO-KRAFT FLAUTA E 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('42', 'MICROCORRUGADO BLANCO-KRAFT FLAUTA E', '29 ECT', 'Sencillo', '9.4200', 'MICROCORRUGADO BLANCO-KRAFT FLAUTA E 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('43', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E', '23 ECT', 'Sencillo', '7.1100', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E 23 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('44', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E', '26 ECT', 'Sencillo', '7.3100', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E 26 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('45', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E', '29 ECT', 'Sencillo', '8.0300', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E 29 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('46', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E', '32 ECT', 'Sencillo', '8.4700', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E 32 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('47', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E', '40 ECT', 'Sencillo', '9.5700', 'MICROCORRUGADO KRAFT-KRAFT FLAUTA E 40 ECT', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('48', 'SINGLE FACE BLANCO- BLANCO FLAUTA B', 'LN150/PM150', 'Single', '8.8100', 'SINGLE FACE BLANCO- BLANCO FLAUTA B LN150/PM150', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('49', 'SINGLE FACE BLANCO- BLANCO FLAUTA E', 'LN150/PM150', 'Single', '8.6700', 'SINGLE FACE BLANCO- BLANCO FLAUTA E LN150/PM150', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('50', 'SINGLE FACE BLANCO- BLANCO FLAUTA E', 'LN150/PM150', 'Single', '8.9900', 'SINGLE FACE BLANCO- BLANCO FLAUTA E LN150/PM150', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('51', 'SINGLE FACE BLANCO- BLANCO FLAUTA F', 'LN150/PM150', 'Single', '8.4000', 'SINGLE FACE BLANCO- BLANCO FLAUTA F LN150/PM150', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('52', 'SINGLE FACE BLANCO-KRAFT FLAUTA B', 'LN150/PM120', 'Single', '7.5700', 'SINGLE FACE BLANCO-KRAFT FLAUTA B LN150/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('53', 'SINGLE FACE BLANCO-KRAFT FLAUTA E', 'LN150/PM120', 'Single', '6.4700', 'SINGLE FACE BLANCO-KRAFT FLAUTA E LN150/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('54', 'SINGLE FACE BLANCO-KRAFT FLAUTA E', 'LN150/PM120', 'Single', '7.7200', 'SINGLE FACE BLANCO-KRAFT FLAUTA E LN150/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('55', 'SINGLE FACE BLANCO-KRAFT FLAUTA F', 'LN150/PM120', 'Single', '6.3300', 'SINGLE FACE BLANCO-KRAFT FLAUTA F LN150/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('56', 'SINGLE FACE KRAFT-KRAFT FLAUTA B', 'LN112/PM112', 'Single', '4.9700', 'SINGLE FACE KRAFT-KRAFT FLAUTA B LN112/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('57', 'SINGLE FACE KRAFT-KRAFT FLAUTA B', 'LN140/PM120', 'Single', '5.2300', 'SINGLE FACE KRAFT-KRAFT FLAUTA B LN140/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('58', 'SINGLE FACE KRAFT-KRAFT FLAUTA B', 'LN140/PM140', 'Single', '5.9600', 'SINGLE FACE KRAFT-KRAFT FLAUTA B LN140/PM140', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('59', 'SINGLE FACE KRAFT-KRAFT FLAUTA B', 'LN180/PM120', 'Single', '5.7000', 'SINGLE FACE KRAFT-KRAFT FLAUTA B LN180/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('60', 'SINGLE FACE KRAFT-KRAFT FLAUTA B', 'LN180/PM140', 'Single', '6.0200', 'SINGLE FACE KRAFT-KRAFT FLAUTA B LN180/PM140', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('61', 'SINGLE FACE KRAFT-KRAFT FLAUTA C', 'LN112/PM112', 'Single', '5.0900', 'SINGLE FACE KRAFT-KRAFT FLAUTA C LN112/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('62', 'SINGLE FACE KRAFT-KRAFT FLAUTA C', 'LN140/PM120', 'Single', '5.5000', 'SINGLE FACE KRAFT-KRAFT FLAUTA C LN140/PM120', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('63', 'SINGLE FACE KRAFT-KRAFT FLAUTA C', 'LN140/PM140', 'Single', '6.0900', 'SINGLE FACE KRAFT-KRAFT FLAUTA C LN140/PM140', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('64', 'SINGLE FACE KRAFT-KRAFT FLAUTA C', 'LN205/PM140', 'Single', '6.6900', 'SINGLE FACE KRAFT-KRAFT FLAUTA C LN205/PM140', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('65', 'SINGLE FACE KRAFT-KRAFT FLAUTA E', 'LN112/PM112', 'Single', '4.6200', 'SINGLE FACE KRAFT-KRAFT FLAUTA E LN112/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('66', 'SINGLE FACE KRAFT-KRAFT FLAUTA E', 'LN140/PM112', 'Single', '4.9800', 'SINGLE FACE KRAFT-KRAFT FLAUTA E LN140/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('67', 'SINGLE FACE KRAFT-KRAFT FLAUTA E', 'LN140/PM140', 'Single', '5.8100', 'SINGLE FACE KRAFT-KRAFT FLAUTA E LN140/PM140', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('68', 'SINGLE FACE KRAFT-KRAFT FLAUTA F', 'LN112/PM112', 'Single', '4.5400', 'SINGLE FACE KRAFT-KRAFT FLAUTA F LN112/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('69', 'SINGLE FACE KRAFT-KRAFT FLAUTA F', 'LN140/PM112', 'Single', '4.8500', 'SINGLE FACE KRAFT-KRAFT FLAUTA F LN140/PM112', '1');
INSERT INTO `tipos_cartones_nousar` VALUES ('70', 'SINGLE FACE KRAFT-KRAFT FLAUTA F', 'LN180/PM112', 'Single', '8.4000', 'SINGLE FACE KRAFT-KRAFT FLAUTA F LN180/PM112', '1');

-- ----------------------------
-- Table structure for tipos_clientes
-- ----------------------------
DROP TABLE IF EXISTS `tipos_clientes`;
CREATE TABLE `tipos_clientes` (
  `id_tipocliente` int(11) NOT NULL,
  `descripcion` varchar(40) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tipocliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_clientes
-- ----------------------------
INSERT INTO `tipos_clientes` VALUES ('1', 'NORMAL', '1');
INSERT INTO `tipos_clientes` VALUES ('2', 'ESPECIAL', '1');

-- ----------------------------
-- Table structure for tipos_estatus
-- ----------------------------
DROP TABLE IF EXISTS `tipos_estatus`;
CREATE TABLE `tipos_estatus` (
  `id_estatus` tinyint(4) NOT NULL,
  `descripcion` char(30) DEFAULT NULL,
  PRIMARY KEY (`id_estatus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_estatus
-- ----------------------------
INSERT INTO `tipos_estatus` VALUES ('0', 'INACTIVO');
INSERT INTO `tipos_estatus` VALUES ('1', 'ACTIVO');
INSERT INTO `tipos_estatus` VALUES ('2', 'SUSPENDIDO');
INSERT INTO `tipos_estatus` VALUES ('3', 'CANCELADO');

-- ----------------------------
-- Table structure for tipos_estatusordenes
-- ----------------------------
DROP TABLE IF EXISTS `tipos_estatusordenes`;
CREATE TABLE `tipos_estatusordenes` (
  `id_estatusorden` int(11) NOT NULL,
  `descripcion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_estatusordenes
-- ----------------------------
INSERT INTO `tipos_estatusordenes` VALUES ('0', 'SIN LIBERAR');
INSERT INTO `tipos_estatusordenes` VALUES ('1', 'PENDIENTE');
INSERT INTO `tipos_estatusordenes` VALUES ('2', 'PRODUCCION');
INSERT INTO `tipos_estatusordenes` VALUES ('3', 'FINALIZADO');
INSERT INTO `tipos_estatusordenes` VALUES ('4', 'CANCELADO');

-- ----------------------------
-- Table structure for tipos_maquinas
-- ----------------------------
DROP TABLE IF EXISTS `tipos_maquinas`;
CREATE TABLE `tipos_maquinas` (
  `id` int(11) NOT NULL,
  `maquina` varchar(30) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of tipos_maquinas
-- ----------------------------

-- ----------------------------
-- Table structure for tipos_materiales
-- ----------------------------
DROP TABLE IF EXISTS `tipos_materiales`;
CREATE TABLE `tipos_materiales` (
  `id_tipomaterial` int(11) NOT NULL,
  `descripcion` varchar(60) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_materiales
-- ----------------------------
INSERT INTO `tipos_materiales` VALUES ('1', 'SINGLE', '1');
INSERT INTO `tipos_materiales` VALUES ('2', 'SENCILLO', '1');
INSERT INTO `tipos_materiales` VALUES ('3', 'DOBLE', '1');
INSERT INTO `tipos_materiales` VALUES ('4', 'KAPLES', '1');
INSERT INTO `tipos_materiales` VALUES ('5', 'SULFATADAS', '1');
INSERT INTO `tipos_materiales` VALUES ('0', 'NO APLICA', '1');

-- ----------------------------
-- Table structure for tipos_mov_almacen
-- ----------------------------
DROP TABLE IF EXISTS `tipos_mov_almacen`;
CREATE TABLE `tipos_mov_almacen` (
  `id_movimiento` int(11) NOT NULL AUTO_INCREMENT,
  `movimiento` varchar(50) DEFAULT NULL,
  `tipo_movimiento` varchar(20) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_movimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_mov_almacen
-- ----------------------------
INSERT INTO `tipos_mov_almacen` VALUES ('1', 'ENTRADA POR COMPRA', 'ENTRADA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('2', 'ENTRADA DE MAQUILA', 'ENTRADA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('3', 'ENTRADA POR REPOSICION', 'ENTRADA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('4', 'ENTRADA POR RECHAZO', 'ENTRADA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('5', 'SALIDA POR VENTA', 'SALIDA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('6', 'SALIDA POR REPOSICION', 'SALIDA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('7', 'SALIDA POR RECHAZO', 'SALIDA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('9', 'SALIDA A PRODUCCION', 'SALIDA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('10', 'ENTRADA X DEVOLUCION MERMA', 'ENTRADA', '1');
INSERT INTO `tipos_mov_almacen` VALUES ('11', 'ENTRADA POR SALDO INICIAL', 'ENTRADA', '1');

-- ----------------------------
-- Table structure for tipos_permisos_usuarios
-- ----------------------------
DROP TABLE IF EXISTS `tipos_permisos_usuarios`;
CREATE TABLE `tipos_permisos_usuarios` (
  `id_TipoUsuario` int(11) NOT NULL,
  `mnucatalogos` bit(1) DEFAULT NULL,
  `mnucatalogos_clientes` bit(1) DEFAULT NULL,
  `mnucatalogos_proveedores` bit(1) DEFAULT NULL,
  `mnucatalogos_materiales` bit(1) DEFAULT NULL,
  `mnucatalogos_maquinas` bit(1) DEFAULT NULL,
  `mnucatalogos_procesos` bit(1) DEFAULT NULL,
  `mnuventas` bit(1) DEFAULT NULL,
  `mnuventas_cotizaciones_cajas` bit(1) DEFAULT NULL,
  `mnuventas_cotizaciones_maquilas` bit(1) DEFAULT NULL,
  `mnualmacen` bit(1) DEFAULT NULL,
  `mnualmacen_ordencompra` bit(1) DEFAULT NULL,
  `mnualmacen_kardex` bit(1) DEFAULT NULL,
  `mnuproduccion` bit(1) DEFAULT NULL,
  `mnuproduccion_ordenproduccion` bit(1) DEFAULT NULL,
  `mnuproduccion_caiman` bit(1) DEFAULT NULL,
  `mnuproduccion_refiladora` bit(1) DEFAULT NULL,
  `mnuproduccion_flexografica` bit(1) DEFAULT NULL,
  `mnuproduccion_pegadoracorrugados` bit(1) DEFAULT NULL,
  `mnuproduccion_empalme` bit(1) DEFAULT NULL,
  `mnuproduccion_suajado` bit(1) DEFAULT NULL,
  `mnuproduccion_pegadolineal` bit(1) DEFAULT NULL,
  `mnuproduccion_grapado` bit(1) DEFAULT NULL,
  `mnuembarques` bit(1) DEFAULT NULL,
  `mnumonitor` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id_TipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of tipos_permisos_usuarios
-- ----------------------------
INSERT INTO `tipos_permisos_usuarios` VALUES ('1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '\0', '', '');
INSERT INTO `tipos_permisos_usuarios` VALUES ('2', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '', '', '', '', '', '', '', '', '\0', '', '');
INSERT INTO `tipos_permisos_usuarios` VALUES ('3', '', '', '', '', '\0', '\0', '', '', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '');
INSERT INTO `tipos_permisos_usuarios` VALUES ('4', '', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '', '', '', '', '', '', '', '', '\0', '', '');
INSERT INTO `tipos_permisos_usuarios` VALUES ('5', '', '\0', '', '', '\0', '\0', '\0', '\0', '\0', '', '', '', '', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '');
INSERT INTO `tipos_permisos_usuarios` VALUES ('6', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('7', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('8', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('9', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('10', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('11', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('12', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('13', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('14', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '\0', '\0');
INSERT INTO `tipos_permisos_usuarios` VALUES ('15', '', '\0', '', '', '\0', '\0', '\0', '\0', '\0', '', '', '', '', '', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '\0', '', '');

-- ----------------------------
-- Table structure for tipos_procesos
-- ----------------------------
DROP TABLE IF EXISTS `tipos_procesos`;
CREATE TABLE `tipos_procesos` (
  `id` int(11) NOT NULL,
  `tipo` int(11) DEFAULT NULL,
  `proceso` varchar(50) COLLATE utf32_spanish_ci DEFAULT NULL,
  `id_maquina` int(11) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- ----------------------------
-- Records of tipos_procesos
-- ----------------------------

-- ----------------------------
-- Table structure for tipos_productos
-- ----------------------------
DROP TABLE IF EXISTS `tipos_productos`;
CREATE TABLE `tipos_productos` (
  `id_tipoproducto` int(11) NOT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_productos
-- ----------------------------
INSERT INTO `tipos_productos` VALUES ('1', 'RANURADA ESTANDAR EFILADA FLEXO PEGADA', '1');
INSERT INTO `tipos_productos` VALUES ('2', 'RANURADA ESTANDAR REFILADA FLEXO GRAPADA', '1');
INSERT INTO `tipos_productos` VALUES ('3', 'RANURADA ESTANDAR REFILADA CAIMAN ( <13 CM FONDO)', '1');

-- ----------------------------
-- Table structure for tipos_usuario
-- ----------------------------
DROP TABLE IF EXISTS `tipos_usuario`;
CREATE TABLE `tipos_usuario` (
  `id_tipousuario` int(11) NOT NULL,
  `descripcion` varchar(20) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tipos_usuario
-- ----------------------------
INSERT INTO `tipos_usuario` VALUES ('1', 'ADMINSTRADOR', '1');
INSERT INTO `tipos_usuario` VALUES ('2', 'SUPERVISOR', '1');
INSERT INTO `tipos_usuario` VALUES ('3', 'COTIZADOR', '1');
INSERT INTO `tipos_usuario` VALUES ('4', 'PLANEACION', '1');
INSERT INTO `tipos_usuario` VALUES ('5', 'ALMACEN', '1');
INSERT INTO `tipos_usuario` VALUES ('6', 'CAIMAN', '1');
INSERT INTO `tipos_usuario` VALUES ('7', 'REFILADO', '1');
INSERT INTO `tipos_usuario` VALUES ('8', 'FLEXOGRAFICA', '1');
INSERT INTO `tipos_usuario` VALUES ('9', 'PEGADORA CORRUGADO', '1');
INSERT INTO `tipos_usuario` VALUES ('10', 'EMPALME', '1');
INSERT INTO `tipos_usuario` VALUES ('11', 'SUAJADO', '1');
INSERT INTO `tipos_usuario` VALUES ('12', 'PEGADO LINEAL', '1');
INSERT INTO `tipos_usuario` VALUES ('13', 'EMBARQUES', '1');
INSERT INTO `tipos_usuario` VALUES ('14', 'GRAPADO', '1');
INSERT INTO `tipos_usuario` VALUES ('15', 'SUPERVISOR/CAIMAN', '1');
INSERT INTO `tipos_usuario` VALUES ('16', 'ALMACEN/EMBARQUES', '1');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` char(20) DEFAULT NULL,
  `password` char(10) DEFAULT NULL,
  `correo` char(30) DEFAULT NULL,
  `nombre` char(50) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  `id_tipo_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES ('1', 'admin', '212256', 'maflores98@prodigy.net.mx', 'ALEJANDRO FLORES', '1', '1');
INSERT INTO `usuarios` VALUES ('2', 'lrivera', '564138', 'admon@corrugadoscoatitla.com.m', 'LUCIA RIVERA ROJAS', '1', '1');
INSERT INTO `usuarios` VALUES ('3', 'wviveros', '679130', 'wrojas@corrugadoscoatitla.com.', 'WILSON VIVEROS ROJAS', '1', '1');
INSERT INTO `usuarios` VALUES ('4', 'odominguez', '463290', '', 'OSCAR DOMINGUEZ LOPEZ', '1', '2');
INSERT INTO `usuarios` VALUES ('5', 'ncuamo', '543180', '', ' NORA CUAMO ROSALES', '1', '2');
INSERT INTO `usuarios` VALUES ('6', 'rrobles', '718310', 'cotizaciones@corrugadoscoatitl', 'RODRIGO ISRAEL ROBLES GÓMEZ', '1', '3');
INSERT INTO `usuarios` VALUES ('7', 'ycajero', '154013', 'ventas@corrugadoscoatitla.com.', 'YAZMIN CAJERO GONZÁLEZ', '1', '4');
INSERT INTO `usuarios` VALUES ('8', 'asalas', '246211', 'auxproduccion@corrugadoscoatit', 'ANA GABRIELA SALAS LÓPEZ', '1', '2');
INSERT INTO `usuarios` VALUES ('9', 'nmaceda', '645917', 'almacen@suajesviveros.com', 'NOEL MACEDA MARIN', '1', '5');
INSERT INTO `usuarios` VALUES ('10', 'lreyes', '564134', ' almacen@corrugadoscoatitla.co', 'LUIS JAVIER REYES', '1', '15');
INSERT INTO `usuarios` VALUES ('11', 'amartinez', '143194', '', 'ALEXIS MARTINEZ CASAS', '1', '7');
INSERT INTO `usuarios` VALUES ('12', 'idominguez', '354633', '', 'IVAN DOMINGUEZ LÓPEZ', '1', '8');
INSERT INTO `usuarios` VALUES ('13', 'jgarcia', '465164', '', 'JORGE SAN JUAN GARCIA', '1', '8');
INSERT INTO `usuarios` VALUES ('14', 'rmarquez', '100243', '', 'ROSARIO MARQUEZ PEREZ', '1', '9');
INSERT INTO `usuarios` VALUES ('15', 'adconejo', '413417', '', 'ADOLFO CONEJO NUÑEZ', '1', '10');
INSERT INTO `usuarios` VALUES ('16', 'anconejo', '994610', '', 'ANTONIO CONEJO NUÑEZ', '1', '10');
INSERT INTO `usuarios` VALUES ('17', 'rpacheco', '873195', '', 'ROGELIO PACHECO AGUIRRE', '1', '11');
INSERT INTO `usuarios` VALUES ('18', 'egonzalez', '445101', '', 'ERICK FELIPE GONZÁLEZ MARQUEZ', '1', '11');
INSERT INTO `usuarios` VALUES ('19', 'ecova', '641391', '', 'EDUARDO COVA', '1', '12');
INSERT INTO `usuarios` VALUES ('20', 'jrenteria', '501439', '', 'JORGE ARATH RENTERIA NOGUERA', '1', '13');
INSERT INTO `usuarios` VALUES ('21', 'aconejo', '236410', '', 'ADOLFO CONEJO NUÑEZ', '1', '14');

-- ----------------------------
-- Table structure for vendedores
-- ----------------------------
DROP TABLE IF EXISTS `vendedores`;
CREATE TABLE `vendedores` (
  `id_vendedor` int(11) NOT NULL,
  `clave` char(10) DEFAULT NULL,
  `correo` char(30) DEFAULT NULL,
  `nombre` char(50) DEFAULT NULL,
  `id_estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_vendedor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of vendedores
-- ----------------------------
INSERT INTO `vendedores` VALUES ('0', 'VEND_0', null, 'NO ASIGNADO', '1');
INSERT INTO `vendedores` VALUES ('1', 'VEND_1', null, 'VENDEDOR 1', '1');

-- ----------------------------
-- View structure for v_acum_detalleprocesos
-- ----------------------------
DROP VIEW IF EXISTS `v_acum_detalleprocesos`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_acum_detalleprocesos` AS SELECT id_orden AS id_orden, ifnull(sum(cantidad_ok),0) AS Acumulado, ifnull(sum(cantidad_merma),0) AS MermaAcumulado
FROM detalle_procesos
GROUP BY id_orden ;

-- ----------------------------
-- View structure for v_clientes_dir
-- ----------------------------
DROP VIEW IF EXISTS `v_clientes_dir`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_clientes_dir` AS SELECT
	`clientes`.`id_cliente` AS `id_cliente`,
	`direcciones_clientes`.`id_tipodireccion` AS `id_tipodireccion`,
	`direcciones_clientes`.`id_estatus` AS `estatusDir`,
	`direcciones_clientes`.`calle` AS `calle`,
	`direcciones_clientes`.`colonia` AS `colonia`,
	`direcciones_clientes`.`ciudad` AS `ciudad`,
	`direcciones_clientes`.`municipio` AS `municipio`,
	`direcciones_clientes`.`estado` AS `estado`,
	`direcciones_clientes`.`cp` AS `cp`,
	`direcciones_clientes`.`nota` AS `nota`,
	`direcciones_clientes`.`id_direccion` AS `id_direccion`,
	`clientes`.`rcomercial` AS `rcomercial`,
	`clientes`.`rsocial` AS `rsocial`,
	`clientes`.`rfc` AS `rfc`,
	`clientes`.`telefono` AS `telefono`,
	`clientes`.`pagweb` AS `pagweb`,
	`clientes`.`id_categoria` AS `id_categoria`,
	`clientes`.`id_estatus` AS `id_estatus`,
	`clientes`.`condpago` AS `condpago`,
	`clientes`.`diasrevision` AS `diasrevision`,
	`clientes`.`contacto1` AS `contacto1`,
	`clientes`.`mailcont1` AS `mailcont1`,
	`clientes`.`refcont1` AS `refcont1`,
	`clientes`.`contacto2` AS `contacto2`,
	`clientes`.`mailcont2` AS `mailcont2`,
	`clientes`.`refcont2` AS `refcont2`,
	`clientes`.`contacto3` AS `contacto3`,
	`clientes`.`mailcont3` AS `mailcont3`,
	`clientes`.`refcont3` AS `refcont3`,
	`clientes`.`id_vendedor` AS `id_vendedor`
FROM
	(
		`clientes`
		JOIN `direcciones_clientes` ON (
			(
				`clientes`.`id_cliente` = `direcciones_clientes`.`id_cliente`
			)
		)
	) ; ;

-- ----------------------------
-- View structure for v_detalle_kardex
-- ----------------------------
DROP VIEW IF EXISTS `v_detalle_kardex`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_detalle_kardex` AS (Select k.id_kardex, m.descripcion as  Material,
k.Cantidad, k.Unidad, k.Tipomovimiento, T.Movimiento, 
e.descripcion as Estatus, upper(u.Usuario) as Usuario, 
DATE_FORMAT(k.fecha_registro, '%d/%m/%Y') as Fecha_Registro,
k.Notas
from kardex k
left join materiales m on m.id_material = k.id_articulo
left join tipos_mov_almacen t on t.id_movimiento = k.id_movimiento
left join tipos_estatus e on e.id_estatus = k.id_estatus
left join usuarios u on u.id_usuario = k.id_usuario) ;

-- ----------------------------
-- View structure for v_existencias
-- ----------------------------
DROP VIEW IF EXISTS `v_existencias`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `v_existencias` AS (
SELECT M.id_material, M.Clave, M.Descripcion, 
IFNULL(CM.descripcion, '-----------') as Categoria,
IFNULL(TM.descripcion, '-----------') as TipoMaterial,
IFNULL(M.costo,0) AS Costo, M.unidad, 
TE.descripcion as Estatus, 
IFNULL(A.existencia,0) as Existencia
FROM materiales M
left JOIN categorias_materiales CM ON M.id_categoria = CM.id_categoria
left JOIN tipos_materiales TM ON M.id_tipomaterial = TM.id_tipomaterial
left JOIN tipos_estatus TE ON M.id_estatus = TE.id_estatus
left JOIN v_kardexaux A ON M.id_material = A.id_articulo) ;

-- ----------------------------
-- View structure for v_kardexaux
-- ----------------------------
DROP VIEW IF EXISTS `v_kardexaux`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `v_kardexaux` AS (select k.id_articulo, sum(k.cantidad) as existencia
from kardex k
group by  k.id_articulo) ;

-- ----------------------------
-- View structure for v_listaordenes
-- ----------------------------
DROP VIEW IF EXISTS `v_listaordenes`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `v_listaordenes` AS (
SELECT o.id_ordenproduccion as Num_Orden, 
t.descripcion as Estatus,
upper(o.nombre_trabajo) AS Trabajo,  
d.cant_requerida as Cantidad, DATE_FORMAT(O.fecha_requeridaentrega, '%d/%m/%Y') as Fecha_Entrega
FROM ordenes_produccion o
INNER jOIN  tipos_estatusordenes t on t.id_estatusorden = o.id_estatusorden	
JOIN detalle_ordenes_produccion d on d.id_ordenproduccion = o.id_ordenproduccion) ;
SET FOREIGN_KEY_CHECKS=1;
