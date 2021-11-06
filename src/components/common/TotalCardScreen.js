import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, ScrollView } from 'react-native';

export default function TotalCardScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                화공생명공학부
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF CHEMICAL{'\n'}AND BIOLOGICAL ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/m6FKk7V/college-mascot-0301.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>최첨단 융합 기술의 중심, {'\n'}화공생명공학 분야의 미래 지향적 여성 리더</Text>
          <Text>화공생명공학은 자연과학과 공학적 지식에 기반한 대표적 융합 학문입니다. 화학·전자소재·에너지공정의 설계/분석/제어와 함께 분자 수준의 미세공학적 접근이 요구되는 차세대 첨단소재, 신재생에너지, 이차전지, 질병진단 및 인공생명체, 복합용도 화장품 등의 분야를 아우릅니다. 특히 미래지향적 분야에 초점을 맞추어 실용적이고도 산업친화적인 연구와 전인적·여성친화적인 공학교육을 수행합니다.</Text>
        </View>
      </SafeAreaView>




      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
              컴퓨터과학전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF {'\n'}COMPUTER SCIENCE</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/wzVJwcv/college-mascot-0305.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>정보사회의 나침판, 흐름을 선도하는</Text>
          <Text>소프트웨어학부는 사회에서 요구하는 전문성과 실용성을 겸비하여 지식정보화 시대를 주도할 IT 전문 인력의 양성뿐만 아니라 전공자 개인의 성취를 도모하여 최종적으로는 기업 및 국가의 발전에 기여하는 것을 지향하고 있습니다. 컴퓨터과학전공은 전통적인 컴퓨터과학 분야인 컴퓨터 시스템 및 소프트웨어에 대한 체계적인 교육 과정을 운영하며, 이를 기반으로 전문적인 소프트웨어 개발 능력을 갖춘 인재 양성을 목표로 합니다.</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                SW융합전공
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF{'\n'}SOFTWARE CONVERGENCE</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/yVbNyhc/college-mascot-0306.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>창조적 소프트웨어 융합을 통한  {'\n'}글로벌 여성공학 CEO 양성</Text>
          <Text>소프트웨어학부는 사회에서 요구하는 전문성과 실용성을 겸비하여 지식정보화 시대를 주도할 IT 전문 인력의 양성뿐만 아니라 전공자 개인의 성취를 도모하여 최종적으로는 기업 및 국가의 발전에 기여하는 것을 지향하고 있습니다. 소프트웨어융합전공은 소프트웨어뿐만 아니라 다양한 학문과 융합 능력을 함양하기 위한 특화된 교육 과정을 운영하며, 이를 기반으로 창의적이고 복합적인 소프트웨어 융합 능력을 갖춘 인재 양성을 목표로 삼고 있습니다.</Text>
          </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                기계시스템학부
              </Text>
              <Text style={styles.subtitleStyle}>DEPARTMENT OF {'\n'}MECHANICAL SYSTEMS{'\n'}ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/MkpFb7D/college-mascot-0307.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>감성과 첨단 기술을 겸비한 {'\n'}미래의 성장 동력</Text>
          <Text>기계공학은 고전역학을 기반으로 한 기계, 장치, 설비의 설계, 제작, 성능 등에 관하여 기초 또는 응용 분야를 연구하는 학문으로, 이와 관련된 산업은 중공업, 자동차, 철강, 전자, 건설 등 산업 전반에 폭넓게 걸쳐 있습니다. 숙명여자대학교 기계시스템학부에서는 이러한 기존 분야 외에도 미래의 성장 동력 산업인 스마트카, 헬스케어로봇, 에너지 시스템 등 소형화 및 기술 집약적 분야에 특별히 초점을 맞추어 실용적·산업친화적 연구와 전인적·여성친화적 공학교육을 수행합니다.</Text>
          </View>
      </SafeAreaView>
      <SafeAreaView style={{ justifyContent: 'space-around', alignItems: 'center' }}>
        <View style={styles.viewStyle}>
          <View style={styles.horizontalViewStyle}>
            <View style={styles.VerticalViewStyle}>
              <Text style={styles.titleStyle}>
                기초공학부
              </Text>
              <Text style={styles.subtitleStyle}>DIVISION OF {'\n'}BASIC ENGINEERING</Text>
            </View>
            <ImageBackground source={{ uri: "https://i.ibb.co/fxv53Mg/college-mascot-0308.jpg" }} resizeMode="contain" style={styles.pictureStyle}></ImageBackground>
          </View>
          <Text style={styles.mainTextStyle}>기초적 공학 교육으로 다양한 분야의 진출이 가능한 {'\n'}여성 공학인재 양성</Text>
          <Text>기초공학부는 신입생을 자율전공 형식으로 선발하고 주요 공학 기초과목들과 각 세부 전공의 특징을 소개하는 다수의 공학개론을 수강하도록 교육과정을 운영하여 학생의 희망 진로 및 관심 분야에 맞춘 전공 선택이 가능하도록 합니다.
            학생선택권 강화 및 여성친화적 공대를 지향하기 위해 학생의 역량과 진로설계에 따라 2학년 진입 시 공대 내 학부 및 전공으로 선택-배정되어 해당 전공교육과정을 이수함으로써 개인의 관심 및 적성에 기초하여 이론과 실무를 겸비한 공학인재 양성을 목적으로 합니다.</Text>
        </View>
      </SafeAreaView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 15,
    padding: 15,
    borderColor: '#e9dada',
    borderRadius: 10,
    borderWidth: 20,
    backgroundColor: 'white',
    width: '90%',
  },
  horizontalViewStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 100
  },
  VerticalViewStyle: {
    flexDirection: 'column'
  },
  pictureStyle: {
    width: 90,
    height: 100,
    marginBottom: -10,
    justifyContent: 'flex-end'
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 25,
    color: '#db5248',

  },
  subtitleStyle: {
    fontSize: 12,
    color: '#db5248'
  },
  mainTextStyle: {
    marginTop: 0
  }
});