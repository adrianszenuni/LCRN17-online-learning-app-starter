import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';

import { FlatList } from "react-native-gesture-handler"

import {
    IconButton,
    TextButton
} from '../../components'

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData
} from "../../constants"

const Home = () => {

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/*  Greetings */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ ...FONTS.h2 }}>Hello, By Adrian!</Text>
                    <Text 
                    style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}>
                        Thursday, 9th September 2021
                    </Text>
                </View>

                {/* Notification */}
                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                />
            </View>
        )
    
    }

    const renderStartLearning = () => {
        return(
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                {/* Info */}
                    <View>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body2
                            }}
                        >
                            HOW TO
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h2
                            }}
                        >
                            Make your brand more visible with our checklist
                        </Text>
                        <Text
                            style={{
                                marginTop: SIZES.radius,
                                colors: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            By Scott Harris
                        </Text>
                    </View>
                {/* Image */}
                    <Image
                        source={images.start_learning}
                        style={{
                            width:'100%',
                            height: 110,
                            marginTop: SIZES.padding
                        }}
                    />
                {/* Button Section */}
                <TextButton
                    label="Start Learning"
                    contentContainerStyle={{
                       height: 40,
                       paddingHorizontal: SIZES.padding,
                       borderRadius: 20,
                       backgroundColor: COLORS.white
                    }}
                    labelStyle={{
                        color: COLORS.black
                    }}
                />
            </ImageBackground>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* HEADER  */}
            { renderHeader() }

            {/* CONTENT */}
            <ScrollView
                contentContainerStyle = {{
                    paddingBottom: 150
                }}
                showsVerticalScrollIndicator={false}
            >
                {/*  START LEARNING */}
                { renderStartLearning() }
            </ScrollView>
        </View>
    )
}

export default Home;