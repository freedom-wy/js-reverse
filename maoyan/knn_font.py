import numpy as np
import operator

def classify0(inX, dataSet, labels, k):
    #KNN
    dataSetSize = dataSet.shape[0]
    diffMat = np.tile(inX, (dataSetSize, 1)) - dataSet
    sqDiffMat = diffMat**2
    sqDistances = sqDiffMat.sum(axis=1)
    distances = sqDistances**0.5
    sortedDistIndices = distances.argsort()
    classCount = {}
    for i in range(k):
        voteIlabel = labels[sortedDistIndices[i]]
        classCount[voteIlabel] = classCount.get(voteIlabel,0) + 1
    sortedClassCount = sorted(classCount.items(),key=operator.itemgetter(1),reverse=True)
    return sortedClassCount[0][0]

def file2matrix():
    #构造训练集
    with open('fontdata.txt') as file:
        arrayOlines = file.readlines()
    numberOfLines = len(arrayOlines)
    returnMat = np.zeros((numberOfLines,200))
    classLabelVector = []
    index = 0
    for line in arrayOlines:
        line = line.strip()
        listFromLine = line.split('->')
        other = listFromLine[1]
        a = other.replace('(','').replace(')',"").replace('[','').replace(']','')[:-1].split(',')
        returnMat[index,:len(a)] = a
        if listFromLine[0] == '1':
            classLabelVector.append(1)
        elif listFromLine[0] == '2':
            classLabelVector.append(2)
        elif listFromLine[0] == '3':
            classLabelVector.append(3)
        elif listFromLine[0] == '4':
            classLabelVector.append(4)
        elif listFromLine[0] == '5':
            classLabelVector.append(5)
        elif listFromLine[0] == '6':
            classLabelVector.append(6)
        elif listFromLine[0] == '7':
            classLabelVector.append(7)
        elif listFromLine[0] == '8':
            classLabelVector.append(8)
        elif listFromLine[0] == '9':
            classLabelVector.append(9)
        elif listFromLine[0] == '0':
            classLabelVector.append(0)
        index += 1
    return returnMat,classLabelVector

def classifyPerson(font):
    returnMats = np.zeros([200])
    returnMats[:len(font)] = font
    # 格式化训练集
    datingDataMat, datingLabels = file2matrix()
    inArr = returnMats
    # 传入字体坐标，样本坐标，样本标签，常数
    classifierResult = classify0(inArr, datingDataMat, datingLabels, 1)
    return classifierResult