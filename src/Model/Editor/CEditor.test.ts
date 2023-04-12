import {describe, expect, test} from '@jest/globals';
import CEditor from './CEditor';
import ShapeType from '../Shape/ShapeType';
import Frame from '../Common/Frame';

describe('CEditor test', () => {
    test('storing shapes', () => {
        const mockShape1 = {
            ID: jest.fn().mockReturnValue('a'),
            Type: () => ShapeType.CIRCLE,
            Frame: () => ({
                leftTop: {x: 0, y: 0},
                height: 0,
                width: 0,
            }),
            SetFrame: (_: Frame) => {}
        }

        const editor = new CEditor();

        editor.AddShape(mockShape1);
        expect(editor.Shapes()).toEqual([mockShape1]);
    });

    test('throws exception when storing shapes with same ID', () => {
        const mockShape1 = {
            ID: jest.fn().mockReturnValue('a'),
            Type: () => ShapeType.CIRCLE,
            Frame: () => ({
                leftTop: {x: 0, y: 0},
                height: 0,
                width: 0,
            }),
            SetFrame: (_: Frame) => {}
        }

        const mockShape2 = {
            ID: jest.fn().mockReturnValue('a'),
            Type: () => ShapeType.TRIANGLE,
            Frame: () => ({
                leftTop: {x: 1, y: 1},
                height: 1,
                width: 1,
            }),
            SetFrame: (_: Frame) => {}
        }


        const editor = new CEditor();

        editor.AddShape(mockShape1);
        expect(() => {
            editor.AddShape(mockShape2);
        }).toThrowError();

        expect(editor.Shapes()).toEqual([mockShape1]);
    });

    test('removing shapes', () => {
        const mockShape1 = {
            ID: jest.fn().mockReturnValue('a'),
            Type: () => ShapeType.CIRCLE,
            Frame: () => ({
                leftTop: {x: 0, y: 0},
                height: 0,
                width: 0,
            }),
            SetFrame: (_: Frame) => {}
        }

        const editor = new CEditor();
        editor.AddShape(mockShape1);

        editor.RemoveShape('a');
        expect(editor.Shapes()).toEqual([]);
    });

    test('not throwing while removing not stored shape', () => {
        const mockShape1 = {
            ID: jest.fn().mockReturnValue('a'),
            Type: () => ShapeType.CIRCLE,
            Frame: () => ({
                leftTop: {x: 0, y: 0},
                height: 0,
                width: 0,
            }),
            SetFrame: (_: Frame) => {}
        }

        const editor = new CEditor();
        editor.AddShape(mockShape1);

        editor.RemoveShape('b');
        expect(editor.Shapes()).toEqual([mockShape1]);
    });
});