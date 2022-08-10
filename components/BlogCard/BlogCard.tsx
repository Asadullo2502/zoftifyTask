import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment'
import { Data_type } from '../../types';


export default function BlogCard({ data }: { data: Data_type }) {

  const [date, setDate] = useState<string>()
  useEffect(() => {
    if (data?.id) {
      setDate(moment(data?.id).format('DD/MM/YY  hh:mm A'))
    }
  }, [data])
  return (
    <View style={styles.blogcard}>
      <View style={styles.top}>
        <Image source={{ uri: data?.img }} style={styles.image} />
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.subtitle}><Text style={styles.subtitle_inner}>Created at:</Text> {date}</Text>
          {
            data?.status === 1 ?
              <View style={styles.type}><Text style={styles.isActive_text}>Published</Text></View>
              :
              <View style={styles.type}><Text style={styles.noActive_text}>Draft</Text></View>
          }
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{data?.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blogcard: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 12
  },
  top: {
    flexDirection: 'row',
  },
  image: {
    width: 128,
    height: 128,
    marginRight: 16,
    borderRadius: 12,
    resizeMode: 'cover'
  },
  title: {
    fontFamily: 'Lato_400Regular',
    fontSize: 18,
    color: "#151C26",
    lineHeight: 24
  },
  subtitle: {
    marginTop: 12,
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: "#151C26",
    lineHeight: 16
  },
  subtitle_inner: {
    color: "#8A8C90"
  },
  type: {
    marginTop: 12,
    alignSelf: 'flex-start'
  },
  noActive_text: {
    backgroundColor: 'rgba(217, 22, 22, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: "#D91616",
    lineHeight: 16
  },
  isActive_text: {
    backgroundColor: 'rgba(16, 193, 55, 0.1);',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: "#10C137",
    lineHeight: 16
  },
  wrapper: {
    marginTop: 16,
  },
  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 14,
    color: "#151C26",
    lineHeight: 20,
  }

});
